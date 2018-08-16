// initial state
const state = {
    companyDetails: Object
}

const getters = {}

const actions = {}

const mutations = {
    getCompanyDetails(state, value) {
        state.companyDetails = value
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}