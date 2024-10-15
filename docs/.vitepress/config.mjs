import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config1
export default defineConfig({
  title: "Note📝",
  description: "xuexingwei Note",
  base: "/note/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docker", link: "/Docker/简介" },
      { text: "Obsidian", link: "/Obsidian/基础语法" },
    ],

    sidebar: [
      {
        text: "Docker",
        collapsed: true,
        items: [
          { text: "简介", link: "/Docker/简介" },
          { text: "开始安装", link: "/Docker/开始安装" },
          {
            text: "基本概念",
            collapsed: true,
            items: [
              {
                text: "基本概念/仓库(Repository)",
                link: "/Docker/基本概念/仓库(Repository)",
              },
              {
                text: "镜像(Image)",
                link: "/Docker/基本概念/镜像(Image)",
              },
              {
                text: "容器(Container)",
                link: "/Docker/基本概念/容器(Container)",
              },
            ],
          },
          {
            text: "使用镜像",
            collapsed: true,
            items: [
              {
                text: "获取镜像",
                link: "/Docker/使用镜像/获取镜像",
              },
              {
                text: "列出镜像",
                link: "/Docker/使用镜像/列出镜像",
              },
              {
                text: "删除本地镜像",
                link: "/Docker/使用镜像/删除本地镜像",
              },
            ],
          },
          {
            text: "操作容器",
            collapsed: true,
            items: [
              {
                text: "启动",
                link: "/Docker/操作容器/启动",
              },
              {
                text: "终止",
                link: "/Docker/操作容器/终止",
              },
            ],
          },
        ],
      },
      {
        text: "Obsidian",
        collapsed: true,
        items: [
          {
            text: "基础语法",
            link: "/Obsidian/基础语法",
          },
          {
            text: "插件",
            collapsed: true,
            items: [
              {
                text: "文件排序",
                link: "/Obsidian/插件/文件排序",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
