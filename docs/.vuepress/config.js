const moment = require("moment");
moment.locale("zh-cn");

module.exports = {
  base: "/",
  title: "漫卷",
  describe: "漫卷诗书喜欲狂",
  head: [
    [
      "link",
      {
        rel: "ico",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "漫卷,前端,前端开发,javascript,js,css,sass,html,vue,react,jquery，微信小程序",
      },
    ],
    [
      "meta",
      {
        name: "author",
        content: "漫卷",
      },
    ],
  ],
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  themeConfig: {
    lastUpdated: "更新时间",
    logo: "/assets/img/logo.png",
    navbar: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "工具", link: "/tool/拷贝vscode插件到另一台电脑" },
      { text: "js", link: "/js/js数组去重/" },
      {
        text: "css",
        items: [
          {
            text: "item1",
            link: "/item1",
          },
          {
            text: "item2",
            link: "/item2",
          },
          {
            text: "sass",
            items: [
              {
                text: "item3",
                link: "/item3",
              },
              {
                text: "item4",
                link: "/item4",
              },
            ],
          },
        ],
      },
      { text: "External", link: "https://iwangxing.cn/manjuan" },
    ],
    // sidebar: [
    //     "/",
    //     "/about/",
    //     {
    //         title: "sass笔记",
    //         path: "/sass/sass混合器",
    //         collapsable: false,
    //         sidebarDepth: 1,
    //         children: ["/sass/sass混合器", "/sass/sass构建样式工具库", "/sass/sass继承"],
    //     },
    // ],
    sidebar: {
      "/tool/": ["/tool/拷贝vscode插件到另一台电脑"],
      "/js/": ["/js/js数组去重", "js要不要加分号"],
      "/css/": [
        {
          title: "css",
          collapsable: false,
          sidebarDepth: 2,
          children: ["/css/css盒模型"],
        },
        {
          title: "sass",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "/css/sass/sass混合器",
            "/css/sass/sass构建样式工具库",
            "/css/sass/sass继承",
          ],
        },
      ],
    },
  },
  plugins: [
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format("llll");
          //return moment(timestamp).fromNow();
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
  ],
};