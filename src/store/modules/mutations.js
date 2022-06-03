const state = {
    mutations: []
};

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
    mutations,
    actions
};
