import Vue from 'vue';
import Vuex from 'vuex';

import logIn from './modules/logIn';
import company from './modules/company';

Vue.use(Vuex);

// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token'),
  UserImage: window.sessionStorage.getItem('UserImage'),
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
  // 登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null;
    state.user = null;
    state.autoLogin30days = false;
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('user');
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
    company
  },
  actions,
  state,
  mutations,
});
export default store;