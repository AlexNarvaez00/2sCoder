import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLLabelElement> {}

export const Label = ({ children, ...props }: Props) => {
  return <label {...props}>{children}</label>;
};
