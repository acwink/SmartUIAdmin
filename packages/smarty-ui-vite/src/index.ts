import { App } from "vue";
import ACButton from "./ACButton";
let a = 1 / 0;
console.log(111);
// 单独导出组件
export { ACButton };

// 插件导出
export default {
  install(app: App) {
    app.component(ACButton.name, ACButton);
  },
};
