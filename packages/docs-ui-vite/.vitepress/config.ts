import { defineConfig } from "vitepress";
export default defineConfig({
  themeConfig: {
    siteTitle: "SmaryUI",
    sidebar: {
      "/": [
        {
          collapsed: true,
          items: [{ text: "快速开始", link: "/" }],
        },
        {
          text: "通用",
          collapsed: true,
          collapsible: true,
          items: [
            {
              text: "Button 按钮",
              link: "/components/button",
            },
          ],
        },
        {
          items: [{ text: "导航", link: "/" }],
        },
        {
          items: [{ text: "反馈", link: "/" }],
        },
        {
          items: [{ text: "数据录入", link: "/" }],
        },
        {
          items: [{ text: "数据展示", link: "/" }],
        },
      ],
    },
  },
});
