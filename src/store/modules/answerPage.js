// initial state
const state = {
    answerDetails: Object,
    TreedataArray:Array,
    testName:"",
    enterpriseName:"",
    enterpriseLogo:"",
    showPanel2:false
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
    changeShowPanel2(state, value) {
        state.showPanel2 = value
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}