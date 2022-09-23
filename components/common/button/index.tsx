import type { FC, PropsWithChildren } from "react";
import classNames from "classnames";

interface ButtonProps {
  disabled?: boolean;
  block?: boolean;
  danger?: boolean;
  className?: string;
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  htmlType?: "button" | "submit" | "reset" | undefined;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { block, danger, children, className, htmlType, disabled, type, ...buttonProps } = props;

  const isPrimary = ["primary"].includes(type as string);
  const isGhost = ["ghost"].includes(type as string);
  const isDashed = ["dashed"].includes(type as string);
  const isDefaultOrDashed = ["default", "dashed"].includes(type as string);
  const isTextOrLink = ["text", "link"].includes(type as string);

  const unlessDangerAndDisabled = !danger && !disabled;
  const IsDangerAndDisabled = danger && !disabled;

  return (
    <button
      type={htmlType}
      disabled={disabled}
      className={classNames("px-6 py-1.5 border rounded transition-all duration-300", className, {
        "w-full": block,
        "disabled:text-slate-400": disabled,

        // primary button
        "text-white": isPrimary && !disabled,
        "border-orange-400 bg-orange-400 hover:bg-white hover:text-orange-400": isPrimary && unlessDangerAndDisabled,
        "bg-rose-600 border-rose-600 hover:opacity-80": isPrimary && IsDangerAndDisabled,

        // dashed button
        "border-dashed": isDashed,
        "text-rose-600 border-rose-600 hover:opacity-80": isDefaultOrDashed && IsDangerAndDisabled,
        "hover:text-orange-400 hover:border-orange-400": isDefaultOrDashed && unlessDangerAndDisabled,

        // text/link button
        "border-transparent": isTextOrLink,
        "text-rose-600": isTextOrLink && IsDangerAndDisabled,
        "disabled:bg-slate-100 disabled:border-slate-200": disabled && !isTextOrLink,

        // ghost button
        "border-white text-white": isGhost,
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
