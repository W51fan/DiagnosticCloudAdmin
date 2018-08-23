// initial state
const state = {
    answerDetails: Object,
    TreedataArray:Array,
    testName:"",
    enterpriseName:"",
    enterpriseLogo:"",
}

const getters = {}

const actions = {}

const mutations = {
    getAnswerDetails(state, value) {
        state.answerDetails = value
    },
    getTestName(state, value) {
        state.testName = value
    },
    getEnterpriseName(state, value) {
        state.enterpriseName = value
    }, 
    getEnterpriseLogo(state, value) {
        state.enterpriseLogo = value
    },
    getTreedataArray(state, value) {
        state.TreedataArray = value
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}