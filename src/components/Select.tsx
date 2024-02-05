// import "@/components/select.css";
import { HTMLProps } from "react";

interface Prosp extends HTMLProps<HTMLSelectElement> {}

export default function Select({ children, className,...props }: Prosp) {
  return <select {...props} className={`rounded-lg block w-full p-2 bg-transparent ${className}`} >{children}</select>;
}
