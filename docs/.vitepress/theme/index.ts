import DefaultTheme from "vitepress/theme";
import "./custom.css";
import "./vp-code-group.css";
import "./rainbow.css";

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";
// @ts-ignore
import HomeUnderline from "./components/HomeUnderline.vue"; // 首页下划线
// @ts-ignore
import Linkcard from "./components/Linkcard.vue"; // 首页下划线

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    // 注册全局组件
    app.component("HomeUnderline", HomeUnderline); // 首页下划线
    app.component("Linkcard", Linkcard); // 首页下划线
  },
};
