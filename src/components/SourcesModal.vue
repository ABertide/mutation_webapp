<template>
    Source selected: {{ selected }}
    <div>
        <va-button @click="showModal = !showModal"> Source filter</va-button>
        <va-modal v-model="showModal" title="Source filter">
            <va-radio v-for="(option, index) in sources" :key="index" v-model="selected" :option="option" />
        </va-modal>
    </div>
</template>

<script>
    import { ref } from '@vue/reactivity';
    import { useStore } from 'vuex';
    import { computed, watch } from '@vue/runtime-core';

    export default {
        setup() {
            const showModal = ref(false);
            const store = useStore();
            const mutations = computed(() => {
                return store.state.mutations.mutations;
            });
            const sourceStored = computed(() => {
                return store.state.sources.sources;
            });
            const selected = ref(sourceStored.value);

            const sources = ref(
                [
                    ...new Set(
                        mutations.value
                            .map(mutation => {
                                return mutation.supports.map(filter => filter.source);
                            })
                            .flat()
                    )
                ].flat()
            );
            watch(selected, newSelected => {
                store.dispatch('sources/updateSourcesAction', newSelected);
            });

            return { sources, showModal, selected };
        }
    };
</script>

<style lang="scss" scoped></style>
