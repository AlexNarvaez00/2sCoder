import { FormEvent } from "react";

export interface Props{
  onChange: (event: FormEvent<HTMLSelectElement>) => void
  value:string;
}
