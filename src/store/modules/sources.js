const state = {
    sources: ''
};

// getters
// const getters = {
// };

// actions
const actions = {
    updateSourcesAction({ commit }, newSources) {
        commit('updateSources', newSources);
    }
};

// sources
const sources = {
    updateSources(state, newSources) {
        state.sources = newSources;
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    sources,
    actions
};
