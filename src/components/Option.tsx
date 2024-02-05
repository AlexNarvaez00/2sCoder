import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLOptionElement> {}

export default function Option({ children, className="" ,...props }: Props) {
  return <option className={`bg-[#1e1e2e] ${className}`} {...props}>{children}</option>;
}
