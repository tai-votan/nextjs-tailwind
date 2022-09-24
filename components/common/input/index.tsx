import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import classNames from "classnames";

export interface InputProps {
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  const { type, className, ...inputProps } = props;
  return (
    <input
      type={type}
      className={classNames("border outline-0 px-2 py-1.5 rounded w-full", className)}
      {...inputProps}
    />
  );
};

Input.defaultProps = {
  disabled: false,
  type: "text",
};
