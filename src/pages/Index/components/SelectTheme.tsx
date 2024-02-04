import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { useId } from "react";


const options: OptionsType[] = [
  { value: "dark", label: "Dark" },
  { value: "lingth", label: "Lingth" },
];

export default function SelectTheme() {
  const id = useId();

  return (
    <div>
      <Label htmlFor={id}>Theme</Label>
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
