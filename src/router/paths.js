export default [
  {
    path: '*',
    meta: {
      public: true,
    },
    redirect: {
      path: '/404'
    }
  },
  {
    path: '/404',
    meta: {
      public: true,
    },
    name: 'NotFound',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/NotFound.vue`
      )
  },
  {
    path: '/403',
    meta: {
      public: true,
    },
    name: 'AccessDenied',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/Deny.vue`
      )
  },
  {
    path: '/500',
    meta: {
      public: true,
    },
    name: 'ServerError',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/Error.vue`
      )
  },
  {
    path: '/login',
    meta: {
      public: true,
    },
    name: 'Login',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/Login.vue`
      )
  },
  {
    path: '/',
    meta: {},
    name: 'Root',
    redirect: {
      name: 'Login'
    }
  },
  {
    path: '/dashboard',
    meta: {
      breadcrumb: true
    },
    name: 'Dashboard',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/Dashboard.vue`
      )
  }, 
  {
    path: '/companyManger',
    meta: {
      breadcrumb: true
    },
    name: 'CompanyManger',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/layout/CompanyManger.vue`
      )
  },
  {
    path: '/companyDetails',
    meta: {
      breadcrumb: true
    },
    name: 'CompanyDetails',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/layout/CompanyDetails.vue`
      )
  },
  {
    path: '/reportPage',
    meta: {
      breadcrumb: false
    },
    name: 'ReportPage',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/layout/ReportPage.vue`
      )
  },
  {
    path: '/answerPage',
    meta: {
      breadcrumb: false
    },
    name: 'AnswerPage',
    component: () =>
      import (
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/pages/layout/AnswerPage.vue`
      )
  },
];