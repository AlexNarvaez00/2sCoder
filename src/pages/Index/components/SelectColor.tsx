import "@/pages/Index/components/Select.css";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { Props } from "@/pages/Index/types/SelectType";
import { useId } from "react";

const options: OptionsType[] = [
  { value: "#f9e2af", label: "Yellow" },
  { value: "#cba6f7", label: "Mauve" },
  { value: "#89b4fa", label: "Blue" },
];


export default function SelectColor({ onChange , value:valueProp }: Props) {
  const id = useId();
  return (
    <div className="select">
      <Label htmlFor={id}>Color</Label>
      <Select id={id} onChange={onChange} name="background"  >
        {options.map(({ value, label }, index) => (
          <Option value={value} key={index}  selected={value == valueProp} >
            {label}
          </Option>
        ))}
      </Select>
    </div>

  )
}
