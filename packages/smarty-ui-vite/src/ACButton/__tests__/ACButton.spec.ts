import ACButton from "../ACButton";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("ACButton", () => {
  test("mount @vue/test-utils", () => {
    // mount
    const wrapper = shallowMount(ACButton, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });

  test("color blue", () => {
    const wrapper = shallowMount(ACButton, {
      slots: {
        default: "Button",
      },
      props: {
        color: "blue",
      },
    });

    expect(wrapper.classes().includes("bg-blue-500")).toBe(true);
  });

  test("color red", () => {
    const wrapper = shallowMount(ACButton, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });

    expect(wrapper.classes().includes("bg-red-500")).toBe(true);
  });
});
