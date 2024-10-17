import { defineConfig } from "vitepress";

// https://github.com/jooy2/vitepress-sidebar
import { generateSidebar } from "vitepress-sidebar";

import timeline from "vitepress-markdown-timeline";

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
    sidebar: generateSidebar({
      manualSortFileNameByPriority: ["vue", "Docker", "Obsidian", "周报"],
      collapsed: true,
      sortFolderTo: "bottom",
      documentRootPath: "/docs",
    }),
    socialLinks: [
      { icon: "github", link: "https://github.com/SuperRonin/note/" },
    ],
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
