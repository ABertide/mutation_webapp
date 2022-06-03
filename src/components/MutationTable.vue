<template>
    <div class="row flex justify--space-between">
        <va-input class="mb-4 ml-4" v-model="posFilter" label="Position filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="geneFilter" label="Gene filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="hgvspFilter" label="HGSVp filter" placeholder="..." />

        <va-input class="mb-4 ml-4" v-model="scoreFilter" label="Delition Score filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="pop_AfFilter" label="Population Frequency filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="filtersFilter" label="Tags filter" placeholder="..." />

        <va-input class="mb-4 ml-4" v-model="sourceFilter" label="Algorythm detector filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="alt_depthFilter" label="Mutation observed filter" placeholder="..." />
    </div>
    <va-data-table :items="mutationsToTable" :columns="headers" :hoverable="true"> </va-data-table>
</template>

<script>
    import { computed, ref } from '@vue/runtime-core';
    import { useStore } from 'vuex';
    export default {
        setup() {
            const store = useStore();

            const posFilter = ref('');
            const geneFilter = ref('');
            const hgvspFilter = ref('');
            const scoreFilter = ref('');
            const pop_AfFilter = ref('');
            const filtersFilter = ref('');
            const sourceFilter = ref('');
            const alt_depthFilter = ref('');

            const mutations = computed(() => {
                return store.state.mutations.mutations;
            });
            const sourceStored = computed(() => {
                return store.state.sources.sources;
            });

            const headers = ref([
                { key: 'position', label: 'Position', sortable: true },
                { key: 'gene', label: 'Gene', sortable: true },
                { key: 'hgvsp', label: 'HGVSP', sortable: true },
                { key: 'score', label: 'Delition Score', sortable: true },
                { key: 'pop_AF', label: 'Population Frequency', sortable: true },
                { key: 'filters', label: 'Tags filters', sortable: true },
                { key: 'source', label: 'Algorythm detector', sortable: true },
                { key: 'alt_depth', label: 'Mutation observed', sortable: true }
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
                        let pop_AF = 'Undefined';
                        if (Math.abs(Math.max(...mutation.pop_AF.map(pop => pop.AF))) !== Infinity) {
                            pop_AF = Math.max(...mutation.pop_AF.map(pop => pop.AF));
                        }

                        let symbol = 'Undefined';
                        if (annotation.subject.symbol !== null) {
                            symbol = annotation.subject.symbol;
                        }
                        let HGVSp = 'Undefined';
                        if (annotation.changes.HGVSp !== null) {
                            HGVSp = annotation.changes.HGVSp;
                        }

                        if (alt_depth[0] !== undefined) {
                            return {
                                position: `${mutation.coord.region}:${mutation.coord.pos}`,
                                gene: symbol,
                                hgvsp: HGVSp,
                                score: annotation.pathogenicity.CADD_phred,
                                pop_AF: pop_AF,
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
                let mutationListFlatten = mutationList.flat().filter(mutation => mutation !== undefined);

                // Filtering table
                if (posFilter.value !== '') {
                    mutationListFlatten = filterMethod(posFilter, mutationListFlatten, 'position');
                }
                if (geneFilter.value !== '') {
                    mutationListFlatten = filterMethod(geneFilter, mutationListFlatten, 'gene');
                }
                if (hgvspFilter.value !== '') {
                    mutationListFlatten = filterMethod(hgvspFilter, mutationListFlatten, 'hgvsp');
                }
                if (scoreFilter.value !== '') {
                    mutationListFlatten = filterMethod(scoreFilter, mutationListFlatten, 'score');
                }
                if (pop_AfFilter.value !== '') {
                    mutationListFlatten = filterMethod(pop_AfFilter, mutationListFlatten, 'pop_AF');
                }
                if (filtersFilter.value !== '') {
                    mutationListFlatten = filterMethod(filtersFilter, mutationListFlatten, 'filters');
                }
                if (sourceFilter.value !== '') {
                    mutationListFlatten = filterMethod(sourceFilter, mutationListFlatten, 'source');
                }
                if (alt_depthFilter.value !== '') {
                    mutationListFlatten = filterMethod(alt_depthFilter, mutationListFlatten, 'alt_depth');
                }

                return mutationListFlatten;
            });

            const filterMethod = (spaceNameFilter, mutationListFlatten, spaceName) => {
                if (spaceNameFilter.value !== '') {
                    mutationListFlatten = mutationListFlatten.filter(mutation => {
                        if (mutation[spaceName] !== null && mutation[spaceName] !== 'Undefined') {
                            return String(mutation[spaceName]).toLowerCase().includes(spaceNameFilter.value.toLowerCase());
                        }
                    });
                }
                return mutationListFlatten;
            };

            return { headers, mutationsToTable, posFilter, geneFilter, hgvspFilter, scoreFilter, pop_AfFilter, filtersFilter, sourceFilter, alt_depthFilter, mutations };
        }
    };
</script>

<style scoped>
    #header-title {
        flex-grow: 0;
        display: inline-flex;
        align-items: center;
    }
</style>
