import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";

const color = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const safelist = [
  ...color.map((v) => `text-${v}`),
  ...color.map((v) => `border-${v}-500`),
  ...color.map((v) => `hover:border-${v}-700`),
  ...color.map((v) => `bg-${v}-500`),
  ...color.map((v) => `bg-${v}-100`),
  ...color.map((v) => `hover:bg-${v}-700`),
  ...color.map((v) => `hover:bg-${v}-500`),
  ...[
    "search",
    "edit",
    "check",
    "message",
    "star-off",
    "delete",
    "add",
    "share",
  ].map((v) => `i-ic-baseline-${v}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
