const state = {
    mutations: []
};

// getters
// const getters = {
// };

// actions
const actions = {
    updateMutationsAction({ commit }, newMutations) {
        commit('updateMutations', newMutations);
    }
};

// mutations
const mutations = {
    updateMutations(state, newMutations) {
        state.mutations = newMutations;
    }
};

export default {
    namespaced: true,
    state,
    // getters,
    mutations,
    actions
};
