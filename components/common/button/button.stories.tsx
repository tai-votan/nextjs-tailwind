import { Button } from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonProps } from "@storybook/components";

const ButtonStory = (props: ButtonProps) => <Button {...props}>{props.children}</Button>;

export const ButtonControl: ComponentStory<typeof Button> = ButtonStory.bind({});

export default {
  title: "Button",
  component: Button,
  args: {
    children: "button",
  },
  argTypes: {
    type: {
      options: ["primary", "dashed", "link", "text", "default"],
      control: { type: "select" },
      defaultValue: "default",
    },
    disabled: {
      options: [true, false],
      control: { type: "select" },
      defaultValue: false,
    },
    block: {
      options: [true, false],
      control: { type: "select" },
      defaultValue: false,
    },
    danger: {
      options: [true, false],
      control: { type: "select" },
      defaultValue: false,
    },
    htmlType: {
      options: ["button", "submit", "reset"],
      control: { type: "select" },
      defaultValue: "button",
    },
  },
} as ComponentMeta<typeof Button>;
