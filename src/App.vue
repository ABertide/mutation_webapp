<template>
    <va-navbar color="primary" shape class="mb-2">
        <template #center>
            <va-navbar-item><h1>Mutation Helper</h1></va-navbar-item>
        </template></va-navbar
    >
    <SourcesModal />
    <MutationTable />
</template>

<script>
    import MutationTable from './components/MutationTable.vue';
    import SourcesModal from './components/SourcesModal.vue';
    import axios from 'axios';
    import { useStore } from 'vuex';
    import { ref } from '@vue/reactivity';
    import { onMounted } from '@vue/runtime-core';

    export default {
        name: 'App',
        components: {
            MutationTable,
            SourcesModal
        },
        setup() {
            const store = useStore();
            onMounted(() => {
                let mutations = ref();
                axios.get(`http://localhost:3000/api/mutation`).then(response => {
                    mutations.value = response.data;
                    store.dispatch('mutations/updateMutationsAction', mutations);
                });
            });

            store.dispatch('sources/updateSourcesAction', 'freebayes');
        }
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
