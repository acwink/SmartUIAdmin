import { App } from "vue";
import ACButton from "./ACButton";
import "uno.css";

// 导出组件ACButton
export { ACButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(ACButton.name, ACButton);
  },
};
