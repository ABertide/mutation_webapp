<template>
    <SourcesModal />
    <MutationTable />
</template>

<script>
    import MutationTable from './components/MutationTable.vue';
    import SourcesModal from './components/SourcesModal.vue';
    import mutations from '@/data/data';
    import { useStore } from 'vuex';

    export default {
        name: 'App',
        components: {
            MutationTable,
            SourcesModal
        },
        setup() {
            const store = useStore();
            store.dispatch('mutations/updateMutationsAction', mutations);
            // store.dispatch('mutations/updatesourcesAction', 'freebayes');
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
