let pageroutes = [
  {
    path: "/React/2018-04-25-React",
    component: () => import('../posts/2018-04-25-React.md')
  },
  {
    path: "/post/2018-04-25-React",
    component: () => import('../posts/2018-04-25-React.md')
  },
  {
    path: "/Tutorial/2018-04-25-React",
    component: () => import('../posts/2018-04-25-React.md')
  },
  {
    path: "/Vue/2018-05-20-Vuepress",
    component: () => import('../posts/2018-05-20-Vuepress.md')
  },
  {
    path: "/post/2018-05-20-Vuepress",
    component: () => import('../posts/2018-05-20-Vuepress.md')
  },
  {
    path: "/Vuepress/2018-05-20-Vuepress",
    component: () => import('../posts/2018-05-20-Vuepress.md')
  },
  {
    path: "/Tutorial/2018-05-20-Vuepress",
    component: () => import('../posts/2018-05-20-Vuepress.md')
  },
  {
    path: "/Git/2018-05-20-Vuepress",
    component: () => import('../posts/2018-05-20-Vuepress.md')
  },
  {
    path: "/HTML5/2018-05-30-W3C-Translate-Eventloop",
    component: () => import('../posts/2018-05-30-W3C-Translate-Eventloop.md')
  },
  {
    path: "/post/2018-05-30-W3C-Translate-Eventloop",
    component: () => import('../posts/2018-05-30-W3C-Translate-Eventloop.md')
  },
  {
    path: "/W3C/2018-05-30-W3C-Translate-Eventloop",
    component: () => import('../posts/2018-05-30-W3C-Translate-Eventloop.md')
  },
  {
    path: "/Translate/2018-05-30-W3C-Translate-Eventloop",
    component: () => import('../posts/2018-05-30-W3C-Translate-Eventloop.md')
  },
  {
    path: "/EventLoop/2018-05-30-W3C-Translate-Eventloop",
    component: () => import('../posts/2018-05-30-W3C-Translate-Eventloop.md')
  },
  {
    path: "/Git/2018-10-21-Git",
    component: () => import('../posts/2018-10-21-Git.md')
  },
  {
    path: "/post/2018-10-21-Git",
    component: () => import('../posts/2018-10-21-Git.md')
  },
  {
    path: "/Tutorial/2018-10-21-Git",
    component: () => import('../posts/2018-10-21-Git.md')
  },
  {
    path: "/LIFE/2018-11-14-Life",
    component: () => import('../posts/2018-11-14-Life.md')
  },
  {
    path: "/post/2018-11-14-Life",
    component: () => import('../posts/2018-11-14-Life.md')
  },
  {
    path: "/Life/2018-11-14-Life",
    component: () => import('../posts/2018-11-14-Life.md')
  },
  {
    path: "/Tutorial/2018-11-14-Life",
    component: () => import('../posts/2018-11-14-Life.md')
  },
  {
    path: "/LIFE/2018-11-23-Async",
    component: () => import('../posts/2018-11-23-Async.md')
  },
  {
    path: "/post/2018-11-23-Async",
    component: () => import('../posts/2018-11-23-Async.md')
  },
  {
    path: "/Javascript/2018-11-23-Async",
    component: () => import('../posts/2018-11-23-Async.md')
  },
  {
    path: "/Async/2018-11-23-Async",
    component: () => import('../posts/2018-11-23-Async.md')
  },
  {
    path: "/Generator/2018-11-23-Async",
    component: () => import('../posts/2018-11-23-Async.md')
  },
  {
    path: "/Promise/2018-11-23-Async",
    component: () => import('../posts/2018-11-23-Async.md')
  },
  {
    path: "/Site/2018-12-07-Site",
    component: () => import('../posts/2018-12-07-Site.md')
  },
  {
    path: "/post/2018-12-07-Site",
    component: () => import('../posts/2018-12-07-Site.md')
  },
  {
    path: "/Tutorial/2018-12-07-Site",
    component: () => import('../posts/2018-12-07-Site.md')
  },
  {
    path: "/Git/2018-12-07-Site",
    component: () => import('../posts/2018-12-07-Site.md')
  },
  {
    path: "/Site/2018-12-07-Translate-1",
    component: () => import('../posts/2018-12-07-Translate-1.md')
  },
  {
    path: "/post/2018-12-07-Translate-1",
    component: () => import('../posts/2018-12-07-Translate-1.md')
  },
  {
    path: "/Tutorial/2018-12-07-Translate-1",
    component: () => import('../posts/2018-12-07-Translate-1.md')
  },
  {
    path: "/Chrome/2018-12-07-Translate-1",
    component: () => import('../posts/2018-12-07-Translate-1.md')
  },
  {
    path: "/Tools/2018-12-07-Translate-1",
    component: () => import('../posts/2018-12-07-Translate-1.md')
  },
  {
    path: "/Site/2018-12-07-Translate-2",
    component: () => import('../posts/2018-12-07-Translate-2.md')
  },
  {
    path: "/post/2018-12-07-Translate-2",
    component: () => import('../posts/2018-12-07-Translate-2.md')
  },
  {
    path: "/Tutorial/2018-12-07-Translate-2",
    component: () => import('../posts/2018-12-07-Translate-2.md')
  },
  {
    path: "/Chrome/2018-12-07-Translate-2",
    component: () => import('../posts/2018-12-07-Translate-2.md')
  },
  {
    path: "/Tools/2018-12-07-Translate-2",
    component: () => import('../posts/2018-12-07-Translate-2.md')
  },
  {
    path: "/Site/2018-12-07-Translate-3",
    component: () => import('../posts/2018-12-07-Translate-3.md')
  },
  {
    path: "/post/2018-12-07-Translate-3",
    component: () => import('../posts/2018-12-07-Translate-3.md')
  },
  {
    path: "/Tutorial/2018-12-07-Translate-3",
    component: () => import('../posts/2018-12-07-Translate-3.md')
  },
  {
    path: "/Chrome/2018-12-07-Translate-3",
    component: () => import('../posts/2018-12-07-Translate-3.md')
  },
  {
    path: "/Tools/2018-12-07-Translate-3",
    component: () => import('../posts/2018-12-07-Translate-3.md')
  },
  {
    path: "/Site/2018-12-10-Translate-4",
    component: () => import('../posts/2018-12-10-Translate-4.md')
  },
  {
    path: "/post/2018-12-10-Translate-4",
    component: () => import('../posts/2018-12-10-Translate-4.md')
  },
  {
    path: "/Tutorial/2018-12-10-Translate-4",
    component: () => import('../posts/2018-12-10-Translate-4.md')
  },
  {
    path: "/Chrome/2018-12-10-Translate-4",
    component: () => import('../posts/2018-12-10-Translate-4.md')
  },
  {
    path: "/Tools/2018-12-10-Translate-4",
    component: () => import('../posts/2018-12-10-Translate-4.md')
  },
  {
    path: "/Site/2018-12-11-Translate-5",
    component: () => import('../posts/2018-12-11-Translate-5.md')
  },
  {
    path: "/post/2018-12-11-Translate-5",
    component: () => import('../posts/2018-12-11-Translate-5.md')
  },
  {
    path: "/Tutorial/2018-12-11-Translate-5",
    component: () => import('../posts/2018-12-11-Translate-5.md')
  },
  {
    path: "/Chrome/2018-12-11-Translate-5",
    component: () => import('../posts/2018-12-11-Translate-5.md')
  },
  {
    path: "/Tools/2018-12-11-Translate-5",
    component: () => import('../posts/2018-12-11-Translate-5.md')
  },
  {
    path: "/Site/2018-12-11-Translate-6",
    component: () => import('../posts/2018-12-11-Translate-6.md')
  },
  {
    path: "/post/2018-12-11-Translate-6",
    component: () => import('../posts/2018-12-11-Translate-6.md')
  },
  {
    path: "/Tutorial/2018-12-11-Translate-6",
    component: () => import('../posts/2018-12-11-Translate-6.md')
  },
  {
    path: "/Chrome/2018-12-11-Translate-6",
    component: () => import('../posts/2018-12-11-Translate-6.md')
  },
  {
    path: "/Tools/2018-12-11-Translate-6",
    component: () => import('../posts/2018-12-11-Translate-6.md')
  },
  {
    path: "/Site/2018-12-11-Translate-7",
    component: () => import('../posts/2018-12-11-Translate-7.md')
  },
  {
    path: "/post/2018-12-11-Translate-7",
    component: () => import('../posts/2018-12-11-Translate-7.md')
  },
  {
    path: "/Tutorial/2018-12-11-Translate-7",
    component: () => import('../posts/2018-12-11-Translate-7.md')
  },
  {
    path: "/Chrome/2018-12-11-Translate-7",
    component: () => import('../posts/2018-12-11-Translate-7.md')
  },
  {
    path: "/Tools/2018-12-11-Translate-7",
    component: () => import('../posts/2018-12-11-Translate-7.md')
  },
  {
    path: "/Site/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/post/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Tutorial/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Chrome/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Tools/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Site/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/post/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Tutorial/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Chrome/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Tools/2018-12-12-Translate-8",
    component: () => import('../posts/2018-12-12-Translate-8.md')
  },
  {
    path: "/Site/2018-12-14-Translate-10",
    component: () => import('../posts/2018-12-14-Translate-10.md')
  },
  {
    path: "/post/2018-12-14-Translate-10",
    component: () => import('../posts/2018-12-14-Translate-10.md')
  },
  {
    path: "/Tutorial/2018-12-14-Translate-10",
    component: () => import('../posts/2018-12-14-Translate-10.md')
  },
  {
    path: "/Chrome/2018-12-14-Translate-10",
    component: () => import('../posts/2018-12-14-Translate-10.md')
  },
  {
    path: "/Tools/2018-12-14-Translate-10",
    component: () => import('../posts/2018-12-14-Translate-10.md')
  },
  {
    path: "/Site/2018-12-14-Translate-11",
    component: () => import('../posts/2018-12-14-Translate-11.md')
  },
  {
    path: "/post/2018-12-14-Translate-11",
    component: () => import('../posts/2018-12-14-Translate-11.md')
  },
  {
    path: "/Tutorial/2018-12-14-Translate-11",
    component: () => import('../posts/2018-12-14-Translate-11.md')
  },
  {
    path: "/Chrome/2018-12-14-Translate-11",
    component: () => import('../posts/2018-12-14-Translate-11.md')
  },
  {
    path: "/Tools/2018-12-14-Translate-11",
    component: () => import('../posts/2018-12-14-Translate-11.md')
  },
  {
    path: "/Site/2018-12-17-Translate-12",
    component: () => import('../posts/2018-12-17-Translate-12.md')
  },
  {
    path: "/post/2018-12-17-Translate-12",
    component: () => import('../posts/2018-12-17-Translate-12.md')
  },
  {
    path: "/Tutorial/2018-12-17-Translate-12",
    component: () => import('../posts/2018-12-17-Translate-12.md')
  },
  {
    path: "/Chrome/2018-12-17-Translate-12",
    component: () => import('../posts/2018-12-17-Translate-12.md')
  },
  {
    path: "/Tools/2018-12-17-Translate-12",
    component: () => import('../posts/2018-12-17-Translate-12.md')
  },
  {
    path: "/Site/2018-12-18-Translate-13",
    component: () => import('../posts/2018-12-18-Translate-13.md')
  },
  {
    path: "/post/2018-12-18-Translate-13",
    component: () => import('../posts/2018-12-18-Translate-13.md')
  },
  {
    path: "/Tutorial/2018-12-18-Translate-13",
    component: () => import('../posts/2018-12-18-Translate-13.md')
  },
  {
    path: "/Chrome/2018-12-18-Translate-13",
    component: () => import('../posts/2018-12-18-Translate-13.md')
  },
  {
    path: "/Tools/2018-12-18-Translate-13",
    component: () => import('../posts/2018-12-18-Translate-13.md')
  },
  {
    path: "/Site/2018-12-18-Translate-14",
    component: () => import('../posts/2018-12-18-Translate-14.md')
  },
  {
    path: "/post/2018-12-18-Translate-14",
    component: () => import('../posts/2018-12-18-Translate-14.md')
  },
  {
    path: "/Tutorial/2018-12-18-Translate-14",
    component: () => import('../posts/2018-12-18-Translate-14.md')
  },
  {
    path: "/Chrome/2018-12-18-Translate-14",
    component: () => import('../posts/2018-12-18-Translate-14.md')
  },
  {
    path: "/Tools/2018-12-18-Translate-14",
    component: () => import('../posts/2018-12-18-Translate-14.md')
  },
  {
    path: "/JavaScript/2018-12-19-this-0",
    component: () => import('../posts/2018-12-19-this-0.md')
  },
  {
    path: "/post/2018-12-19-this-0",
    component: () => import('../posts/2018-12-19-this-0.md')
  },
  {
    path: "/Tutorial/2018-12-19-this-0",
    component: () => import('../posts/2018-12-19-this-0.md')
  },
  {
    path: "/Site/2018-12-20-Translate-15",
    component: () => import('../posts/2018-12-20-Translate-15.md')
  },
  {
    path: "/post/2018-12-20-Translate-15",
    component: () => import('../posts/2018-12-20-Translate-15.md')
  },
  {
    path: "/Tutorial/2018-12-20-Translate-15",
    component: () => import('../posts/2018-12-20-Translate-15.md')
  },
  {
    path: "/Chrome/2018-12-20-Translate-15",
    component: () => import('../posts/2018-12-20-Translate-15.md')
  },
  {
    path: "/Tools/2018-12-20-Translate-15",
    component: () => import('../posts/2018-12-20-Translate-15.md')
  },
  {
    path: "/Site/2018-12-20-Translate-16",
    component: () => import('../posts/2018-12-20-Translate-16.md')
  },
  {
    path: "/post/2018-12-20-Translate-16",
    component: () => import('../posts/2018-12-20-Translate-16.md')
  },
  {
    path: "/Tutorial/2018-12-20-Translate-16",
    component: () => import('../posts/2018-12-20-Translate-16.md')
  },
  {
    path: "/Chrome/2018-12-20-Translate-16",
    component: () => import('../posts/2018-12-20-Translate-16.md')
  },
  {
    path: "/Tools/2018-12-20-Translate-16",
    component: () => import('../posts/2018-12-20-Translate-16.md')
  },
  {
    path: "/Site/2018-12-20-Translate-17",
    component: () => import('../posts/2018-12-20-Translate-17.md')
  },
  {
    path: "/post/2018-12-20-Translate-17",
    component: () => import('../posts/2018-12-20-Translate-17.md')
  },
  {
    path: "/Tutorial/2018-12-20-Translate-17",
    component: () => import('../posts/2018-12-20-Translate-17.md')
  },
  {
    path: "/Chrome/2018-12-20-Translate-17",
    component: () => import('../posts/2018-12-20-Translate-17.md')
  },
  {
    path: "/Tools/2018-12-20-Translate-17",
    component: () => import('../posts/2018-12-20-Translate-17.md')
  },
  {
    path: "/Site/2018-12-20-Translate-18",
    component: () => import('../posts/2018-12-20-Translate-18.md')
  },
  {
    path: "/post/2018-12-20-Translate-18",
    component: () => import('../posts/2018-12-20-Translate-18.md')
  },
  {
    path: "/Tutorial/2018-12-20-Translate-18",
    component: () => import('../posts/2018-12-20-Translate-18.md')
  },
  {
    path: "/Chrome/2018-12-20-Translate-18",
    component: () => import('../posts/2018-12-20-Translate-18.md')
  },
  {
    path: "/Tools/2018-12-20-Translate-18",
    component: () => import('../posts/2018-12-20-Translate-18.md')
  },
  {
    path: "/Site/2018-12-20-Translate-19",
    component: () => import('../posts/2018-12-20-Translate-19.md')
  },
  {
    path: "/post/2018-12-20-Translate-19",
    component: () => import('../posts/2018-12-20-Translate-19.md')
  },
  {
    path: "/Tutorial/2018-12-20-Translate-19",
    component: () => import('../posts/2018-12-20-Translate-19.md')
  },
  {
    path: "/Chrome/2018-12-20-Translate-19",
    component: () => import('../posts/2018-12-20-Translate-19.md')
  },
  {
    path: "/Tools/2018-12-20-Translate-19",
    component: () => import('../posts/2018-12-20-Translate-19.md')
  }];
export default pageroutes;