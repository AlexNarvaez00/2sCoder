import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { useId } from "react";

const options: OptionsType[] = [
  { value: "javascript", label: "Javascript" },
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "PHP", label: "PHP" },
];

export default function SelectLang() {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id}>Language</Label>
      <Select id={id}>
        {options.map(({ value, label }, index) => (
          <Option value={value} key={index}>
            {label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
