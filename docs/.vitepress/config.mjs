import { defineConfig } from "vitepress";

// https://github.com/jooy2/vitepress-sidebar
import { generateSidebar } from "vitepress-sidebar";

import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config1
export default defineConfig({
  title: "Note📝",
  description: "xuexingwei Note",
  base: "/note/",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docker", link: "/Docker/简介" },
      { text: "Obsidian", link: "/Obsidian/基础语法" },
    ],
    sidebar: generateSidebar({
      manualSortFileNameByPriority: ["vue", "Docker", "Obsidian", "周报"],
      collapsed: true,
      sortFolderTo: "bottom",
      documentRootPath: "/docs",
    }),
    socialLinks: [
      { icon: "github", link: "https://github.com/SuperRonin/note/" },
    ],
    //上次更新时间
    lastUpdated: {
      text: "上次更新时间",
      formatOptions: {
        dateStyle: "short", // 可选值full、long、medium、short
        timeStyle: "medium", // 可选值full、long、medium、short
      },
    },
    //本地搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
  markdown: {
    //时间线
    config: (md) => {
      md.use(timeline);
    },
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
});
