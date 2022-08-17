import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink";
export type IShape = "";
export type ISize = "small" | "medium" | "large";
export type Iicon =
  | "search"
  | "edit"
  | "check"
  | "message"
  | "star-off"
  | "delete"
  | "add"
  | "share"
  | "";

export interface IPorps {
  color: IColor;
  plain: boolean;
  size: ISize;
  round: boolean;
  icon: Iicon;
}
const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String as PropType<Iicon>,
    default: "",
  },
};

// 创建按钮样式
function createButtonStyle(props: IPorps) {
  let goalStyle = `
    cursor-pointer
    border-none
    font-semibold
  `;

  const createSizeStyle = (size: ISize) => {
    if (size === "small")
      return `
        shadow-sm
        py-1
        px-2
      `;
    if (size === "large")
      return `
        shadow-lg
        py-4
        px-6
      `;

    return `
      shadow-md
      py-2
      px-4
    `;
  };

  const createRoundStyle = (round: boolean) => {
    if (round)
      return `
        rounded-full
      `;
    return `
      rounded-md
    `;
  };

  const createThemeStyle = (plain: boolean, color: IColor) => {
    const borderStyle = `
      text-${color}
      hover:text-white
      
      bg-${color}-100 
      hover:bg-${color}-500 
    `;

    const fillStyle = `
      text-white
      
      
      bg-${props.color}-500 
      hover:bg-${props.color}-700 
    `;

    return plain ? borderStyle : fillStyle;
  };

  goalStyle += createSizeStyle(props.size);
  goalStyle += createRoundStyle(props.round);
  goalStyle += createThemeStyle(props.plain, props.color);

  return goalStyle;
}

export default defineComponent({
  name: "ACButton",
  props,
  setup(props, { slots }) {
    const buttonStyle = createButtonStyle(props);

    return () => (
      <button class={buttonStyle}>
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
