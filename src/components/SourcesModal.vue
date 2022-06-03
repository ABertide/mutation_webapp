<template>
    <div>
        <va-button @click="showModal = !showModal"> Source filter</va-button>
        <v-dialog v-model="showModal" max-width="290">
            <v-card>
                <v-card-title class="text-h5"> Source filter </v-card-title>

                <v-card-text>
                    <h3>Chose Source to display</h3>
                    <v-checkbox v-for="option in sources" :key="option.value" v-model="selected" :label="option" :value="option" hide-details></v-checkbox>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="showModalAction"> Close </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import { ref } from '@vue/reactivity';
    import { useStore } from 'vuex';
    import { computed } from '@vue/runtime-core';

    export default {
        setup() {
            const showModal = ref(false);
            const store = useStore();
            const selected = ref('freebayes');
            const mutations = computed(() => {
                return store.state.mutations.mutations;
            });

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
            console.log(selected.value);
            store.dispatch('mutations/updateSourcesAction', selected.value);

            return { sources, showModal };
        }
    };
</script>

<style lang="scss" scoped></style>
