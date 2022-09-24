import type { FC, MouseEvent, PropsWithChildren } from "react";
import classNames from "classnames";
import { getPrimaryColorByKey } from "@/utils/utils";

interface ButtonProps {
  disabled?: boolean;
  block?: boolean;
  danger?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "primary" | "dashed" | "link" | "text" | "default";
  htmlType?: "button" | "submit" | "reset" | undefined;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { block, danger, children, className, htmlType, disabled, type, ...buttonProps } = props;

  const isPrimary = ["primary"].includes(type as string);
  const isDashed = ["dashed"].includes(type as string);
  const isDefaultOrDashed = ["default", "dashed"].includes(type as string);
  const isLink = ["link"].includes(type as string);
  const isTextOrLink = ["text", "link"].includes(type as string);

  const unlessDangerAndDisabled = !danger && !disabled;
  const IsDangerAndDisabled = danger && !disabled;

  const textPrimary = getPrimaryColorByKey("text");
  const borderPrimary = getPrimaryColorByKey("border");
  const bgPrimary = getPrimaryColorByKey("bg");

  return (
    <button
      type={htmlType}
      disabled={disabled}
      className={classNames("px-6 py-1.5 border rounded transition-all duration-300", className, {
        "w-full": block,
        "disabled:text-slate-400 cursor-not-allowed": disabled,

        // primary button
        "text-white": isPrimary && !disabled,
        [`${borderPrimary} ${bgPrimary} hover:opacity-80`]: isPrimary && unlessDangerAndDisabled,
        "bg-rose-600 border-rose-600 hover:opacity-80": isPrimary && IsDangerAndDisabled,

        // dashed button
        "border-dashed": isDashed,
        "text-rose-600 border-rose-600 hover:opacity-80": isDefaultOrDashed && IsDangerAndDisabled,
        [`hover:${textPrimary} hover:${borderPrimary}`]: isDefaultOrDashed && unlessDangerAndDisabled,

        // text/link button
        "border-transparent": isTextOrLink,
        "text-sky-600": isLink && unlessDangerAndDisabled,
        "text-rose-600": isTextOrLink && IsDangerAndDisabled,
        "disabled:bg-slate-100 disabled:border-slate-200": disabled && !isTextOrLink,
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  block: false,
  danger: false,
  type: "default",
  htmlType: "button",
};
