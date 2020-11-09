export default {
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/app1', microApp: 'eee' },
  ],
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'eee', // 唯一 id
          entry: '//localhost:8081', // html entry
        },
      ],
    },
  },
};
