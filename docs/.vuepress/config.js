const moment = require("moment");
moment.locale("zh-cn");

module.exports = {
    base: "/Nblog/",
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
                content: "漫卷,前端,前端开发,javascript,js,css,sass,html,vue,react,jquery，微信小程序",
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
    themeConfig: {
        lastUpdated: "更新时间",
        logo: "/assets/img/logo.png",
        navbar: true,
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
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
                    children: ["/css/sass/sass混合器", "/css/sass/sass构建样式工具库", "/css/sass/sass继承"],
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
    ],
};
