import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLOptionElement> {}

export default function Option({ children, ...props }: Props) {
  return <option {...props}>{children}</option>;
}
