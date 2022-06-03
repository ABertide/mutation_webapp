<template>
    <va-data-table :items="mutationsToTable" :columns="headers" :hoverable="true" />
</template>

<script>
    import { computed, ref } from '@vue/runtime-core';
    import { useStore } from 'vuex';
    export default {
        setup() {
            const store = useStore();
            const mutations = computed(() => {
                return store.state.mutations.mutations;
            });
            const sourceStored = computed(() => {
                return store.state.sources.sources;
            });

            const headers = ref([
                { key: 'position', label: 'Position' },
                { key: 'gene', label: 'Gene' },
                { key: 'hgvsp', label: 'HGVSP' },
                { key: 'score', label: 'Delition Score' },
                { key: 'pop_AF', label: 'Population Frequency' },
                { key: 'filters', label: 'Tags filters' },
                { key: 'source', label: 'Algorythm detector' },
                { key: 'alt_depth', label: 'Mutation observed' }
            ]);

            const mutationsToTable = computed(() => {
                let mutationList = mutations.value.map(mutation => {
                    let mutationByAnnotation = mutation.annot.map(annotation => {
                        let filters = [...new Set(mutation.supports.map(filter => filter.filters).flat())];
                        let sources = [...new Set(mutation.supports.map(filter => filter.source))];
                        let alt_depth = mutation.supports.filter(filter => {
                            if (filter.source === sourceStored.value) {
                                return filter;
                            }
                        });
                        if (alt_depth[0] !== undefined) {
                            return {
                                position: `${mutation.coord.region}:${mutation.coord.pos}`,
                                gene: annotation.subject.symbol,
                                hgvsp: annotation.changes.HGVSp,
                                score: annotation.pathogenicity.CADD_phred,
                                pop_AF: Math.max(...mutation.pop_AF.map(pop => pop.AF)),
                                filters: filters.join(', '),
                                source: sources.join(', '),
                                alt_depth: alt_depth[0].libraries[0].alt_depth
                            };
                        } else {
                            return;
                        }
                    });
                    return mutationByAnnotation;
                });
                return mutationList.flat().filter(mutation => mutation !== undefined);
            });
            console.log(mutationsToTable.value);

            return { headers, mutationsToTable };
        }
    };
</script>

<style scoped></style>
