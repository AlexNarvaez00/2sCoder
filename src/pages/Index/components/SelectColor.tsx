import "@/pages/Index/components/Select.css";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { Props } from "@/pages/Index/types/SelectType";
import { FormEvent, memo, useId, useState } from "react";

const options: OptionsType[] = [
  { value: "#f9e2af", label: "Yellow" },
  { value: "#cba6f7", label: "Mauve" },
  { value: "#89b4fa", label: "Blue" },
];

function SelectColor({ onChange, value }: Props) {
  const [state, setState] = useState(value);
  const id = useId();

  const handleChange = (event: FormEvent<HTMLSelectElement>) => {
    onChange(event);
    setState(event.currentTarget.value);
  };

  return (
    <div className="select">
      <Label htmlFor={id}>Color</Label>
      <Select id={id} onChange={handleChange} name="background" value={state}>
        {options.map(({ value, label }, index) => (
          <Option value={value} key={index}>
            {label}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default memo(SelectColor);
