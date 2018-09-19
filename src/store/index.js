import Vue from 'vue';
import Vuex from 'vuex';

import logIn from './modules/logIn';
import company from './modules/company';
import answerPage from './modules/answerPage';
import reportPage from './modules/reportPage';


Vue.use(Vuex);

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token'),
  UserImage: window.sessionStorage.getItem('UserImage'),
  companyDetails: window.sessionStorage.getItem('CompanyDetails'),
  evaluationId: window.sessionStorage.getItem('evaluationId'),
  enterpriseId: window.sessionStorage.getItem('enterpriseId'),
  evaluationIdx: window.sessionStorage.getItem('evaluationIdx'),
  answerDetails:window.sessionStorage.getItem('answerDetails'),
  TreedataArray:window.sessionStorage.getItem('TreedataArray'),
  testName:window.sessionStorage.getItem('testName'),
  enterpriseName:window.sessionStorage.getItem('enterpriseName'),
  enterpriseLogo:window.sessionStorage.getItem('enterpriseLogo'),
};

const mutations = {
  // 将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data;
    window.sessionStorage.setItem('token', data);
  },
  // 获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data;
    window.sessionStorage.setItem('user', data);
  },
  SET_UserImage: (state, value) => {
    state.UserImage = value;
    window.sessionStorage.setItem('UserImage', value);
  },
  SET_CompanyDetails: (state, value) => {
    state.companyDetails = value;
    let details = JSON.stringify(value)
    window.sessionStorage.setItem('CompanyDetails', details);
    // window.sessionStorage.CompanyDetails= value;
  },
  SET_EvaluationId: (state, value) => {
    state.evaluationId = value;
    window.sessionStorage.setItem('evaluationId', value);
  },
  SET_EnterpriseId: (state, value) => {
    state.enterpriseId = value;
    window.sessionStorage.setItem('enterpriseId', value);
  },
  SET_EvaluationIdx: (state, value) => {
    state.evaluationIdx = value;
    window.sessionStorage.setItem('evaluationIdx', value);
  },
  SET_AnswerDetails: (state, value) => {
    state.answerDetails = value;
    let details = JSON.stringify(value)
    window.sessionStorage.setItem('answerDetails', details);
  },
  SET_TreedataArray: (state, value) => {
    state.TreedataArray = value;
    let details = JSON.stringify(value)
    window.sessionStorage.setItem('TreedataArray', details);
  },
  SET_TestName: (state, value) => {
    state.testName = value;
    window.sessionStorage.setItem('testName', value);
  },
  SET_EnterpriseName: (state, value) => {
    state.enterpriseName = value;
    window.sessionStorage.setItem('enterpriseName', value);
  },
  SET_EnterpriseLogo: (state, value) => {
    state.enterpriseLogo = value;
    window.sessionStorage.setItem('enterpriseLogo', value);
  },
  // 登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null;
    state.user = null;
    state.autoLogin30days = false;
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('UserImage');
    window.sessionStorage.removeItem('CompanyDetails');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('UsereMail');
    window.localStorage.removeItem('UsereMobile');
    window.localStorage.removeItem('UserImage');
  }
};

const actions = {};

const store = new Vuex.Store({
  modules: {
    logIn,
    company,
    answerPage,
    reportPage,
  },
  actions,
  state,
  mutations,
});
export default store;