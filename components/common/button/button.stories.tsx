import { Button, ButtonProps } from "./index";
import type { FC, PropsWithChildren } from "react";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

const ButtonStory: ComponentStory<FC<PropsWithChildren<ButtonProps>>> = (props) => (
  <Button {...props}>{props.children}</Button>
);

export const ButtonControl = ButtonStory.bind({});

export default {
  title: "Button",
  component: Button,
  args: {
    children: "button",
  },
  argTypes: {
    type: {
      options: ["primary", "dashed", "link", "text", "default"],
      defaultValue: "default",
    },
    disabled: {
      options: [true, false],
      defaultValue: false,
    },
    block: {
      options: [true, false],
      defaultValue: false,
    },
    danger: {
      options: [true, false],
      defaultValue: false,
    },
    htmlType: {
      options: ["button", "submit", "reset"],
      defaultValue: "button",
    },
    className: {
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Button>;
