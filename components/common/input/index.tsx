import type { HTMLInputTypeAttribute } from "react";
import classNames from "classnames";

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export const Input = (props: InputProps) => {
  const { type = "text", className, ...inputProps } = props;
  return (
    <input
      type={type}
      className={classNames("border outline-0 px-2 py-1.5 rounded w-full", className)}
      {...inputProps}
    />
  );
};
