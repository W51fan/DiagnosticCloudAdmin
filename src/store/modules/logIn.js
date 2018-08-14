// initial state
const state = {
    session_id: "",
    mobile: "",
    email: "",
    user: "",
    // userImage: ""
    rid: "",
    remark: "",
}

const getters = {}

const actions = {}

const mutations = {
    getSession_id(state, value) {
        state.session_id = value;
    },
    getMobile(state, value) {
        state.mobile = value;
    },
    getEmail(state, value) {
        state.email = value;
    },
    getUser(state, value) {
        state.user = value;
    },
    getRid(state, value) {
        state.rid = value;
    },
    getRemark(state, value) {
        state.remark = value;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}