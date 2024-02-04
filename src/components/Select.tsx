import { HTMLProps } from "react";

interface Prosp extends HTMLProps<HTMLSelectElement> {}

export default function Select({ children, ...props }: Prosp) {
  return <select {...props}>{children}</select>;
}
