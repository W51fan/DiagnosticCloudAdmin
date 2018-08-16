const Menu = [
  // { header: 'Apps' },
  {
    title: '控制台',
    hidden: false,
    icon: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    title: '企业管理',
    hidden: false,
    component: 'components',
    icon: 'tune',
    name: 'CompanyManger',
    path: '/companyManger',
  },
  {
    title: '企业详情',
    hidden: true,
    name: 'CompanyDetails',
    path: '/companyDetails',
  },
  {
    title: '用户管理',
    hidden: false,
    name: '用户管理',
    component: 'picker',
    icon: 'filter_vintage',
    path: '/pickers/datepicker',
  },
  {
    title: '题库管理',
    hidden: false,
    name: '题库管理',
    component: 'layout',
    icon: 'view_compact',
    path: '/layout/footer',
  },
  {
    title: '问卷管理',
    hidden: false,
    name: '问卷管理',
    component: 'widgets',
    icon: 'widgets',
    path: '/widgets/social',
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;