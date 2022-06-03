<template>
    <div class="row flex justify--space-between">
        <!-- Filtering field -->
        <va-input class="mb-4 ml-4" v-model="posFilter" label="Position filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="geneFilter" label="Gene filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="hgvspFilter" label="HGSVp filter" placeholder="..." />

        <va-input class="mb-4 ml-4" v-model="scoreFilter" label="Delition Score filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="pop_AfFilter" label="Population Frequency filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="filtersFilter" label="Tags filter" placeholder="..." />

        <va-input class="mb-4 ml-4" v-model="sourceFilter" label="Algorythm detector filter" placeholder="..." />
        <va-input class="mb-4 ml-4" v-model="alt_depthFilter" label="Mutation observed filter" placeholder="..." />
    </div>

    <!-- Mutations Table -->
    <va-data-table :items="mutationsToTable" :columns="headers" :hoverable="true">
        <template #cell(score)="data"> <va-icon size="large" :color="data.value" name="square" /> </template>
    </va-data-table>
</template>

<script>
    import { computed, ref } from '@vue/runtime-core';
    import { useStore } from 'vuex';
    export default {
        setup() {
            const store = useStore();

            // Filtering variables
            const posFilter = ref('');
            const geneFilter = ref('');
            const hgvspFilter = ref('');
            const scoreFilter = ref('');
            const pop_AfFilter = ref('');
            const filtersFilter = ref('');
            const sourceFilter = ref('');
            const alt_depthFilter = ref('');

            // Get stored data
            const mutations = computed(() => {
                return store.state.mutations.mutations;
            });
            const sourceStored = computed(() => {
                return store.state.sources.sources;
            });

            // Column names
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

            // Data parsed for the table
            const mutationsToTable = computed(() => {
                let mutationList = mutations.value.map(mutation => {
                    // Each mutation (5)
                    let mutationByAnnotation = mutation.annot.map(annotation => {
                        // Each annotation of a mutation
                        // Get unique tags
                        let filters = [...new Set(mutation.supports.map(filter => filter.filters).flat())];
                        // Get unique sources
                        let sources = [...new Set(mutation.supports.map(filter => filter.source))];

                        // Get Mutation observed for the choosen source
                        let alt_depth = mutation.supports.filter(filter => {
                            if (filter.source === sourceStored.value) {
                                return filter;
                            }
                        });

                        // Get highest frequency
                        let pop_AF = 'Undefined';
                        if (Math.abs(Math.max(...mutation.pop_AF.map(pop => pop.AF))) !== Infinity) {
                            pop_AF = Math.max(...mutation.pop_AF.map(pop => pop.AF));
                        }

                        // affected gene
                        let symbol = 'Undefined';
                        if (annotation.subject.symbol !== null) {
                            symbol = annotation.subject.symbol;
                        }

                        // norf
                        let HGVSp = 'Undefined';
                        if (annotation.changes.HGVSp !== null) {
                            HGVSp = annotation.changes.HGVSp;
                        }

                        // Get color for delection score
                        const score = annotation.pathogenicity.CADD_phred;
                        const r = score * 8.5;
                        const g = 255 - score * 8.5;
                        const hex = rgbToHex(r, g, 0);

                        if (alt_depth[0] !== undefined) {
                            // Create a line
                            return {
                                position: `${mutation.coord.region}:${mutation.coord.pos}`,
                                gene: symbol,
                                hgvsp: HGVSp,
                                score: hex,
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
                // triggered when filter field is not empty
                if (spaceNameFilter.value !== '') {
                    mutationListFlatten = mutationListFlatten.filter(mutation => {
                        if (mutation[spaceName] !== null && mutation[spaceName] !== 'Undefined') {
                            return String(mutation[spaceName]).toLowerCase().includes(spaceNameFilter.value.toLowerCase());
                        }
                    });
                }
                return mutationListFlatten;
            };

            const rgbToHex = (r, g, b) => {
                // Convert rgb to Hex
                return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
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
