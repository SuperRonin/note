// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./custom.css";
/* .vitepress/theme/style/index.css */
import "./vp-code-group.css";

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,
};
