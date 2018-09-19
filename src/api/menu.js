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
    name: 'UserManger',
    component: 'userManger',
    icon: 'filter_vintage',
    path: '/userManger',
  },
  {
    title: '题库管理',
    hidden: false,
    name: 'QuestionManger',
    component: 'questionManger',
    icon: 'view_compact',
    path: '/questionManger',
  },
  {
    title: '问卷管理',
    hidden: false,
    name: 'TestManger',
    component: 'testManger',
    icon: 'widgets',
    path: '/testManger',
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