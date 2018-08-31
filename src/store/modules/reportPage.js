// initial state
const state = {
    reportParm: {
        name: "",
        evaluationId: "",
        enterpriseId: "",
        idx: "",
    }
}

const getters = {}

const actions = {}

const mutations = {
    getReportParm(state, value) {
         state.reportParm[value.key] = value.value
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}