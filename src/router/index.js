import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/index'
import paths from './paths';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);
const router = new Router({
  base: '/',
  mode: 'hash',
  linkActiveClass: 'active',
  routes: paths
});
// router gards
router.beforeEach((to, from, next) => {
  NProgress.start();
  const token = store.state.token ? store.state.token : window.localStorage.getItem("token");
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      store.commit("loginPage/getSession_id", token);

      store.commit("loginPage/getUseremail", window.localStorage.getItem('UsereMail'));
      store.commit("loginPage/getUsermobile", window.localStorage.getItem('UsereMobile'));
      
      
      
      next()
    } else {
      next({
        path: '/loginPage',
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }

});

router.afterEach((to, from) => {
  // ...
  NProgress.done();
});

export default router;