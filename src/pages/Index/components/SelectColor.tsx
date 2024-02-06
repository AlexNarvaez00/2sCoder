import "@/pages/Index/components/Select.css";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { Props } from "@/pages/Index/types/SelectType";
import { FormEvent, memo, useId, useState } from "react";

const options: OptionsType[] = [
 { label: "Base", value: "#1e1e2e"},
 { label: "Blue", value: "#89b4fa"},
 { label: "Crust", value: "#11111b"},
 { label: "Flamingo", value: "#f2cdcd"},
 { label: "Green", value: "#a6e3a1"},
 { label: "Lavender", value: "#b4befe"},
 { label: "Mantle", value: "#181825"},
 { label: "Maroon", value: "#eba0ac"},
 { label: "Mauve", value: "#cba6f7"},
 { label: "Overlay0", value: "#6c7086"},
 { label: "Overlay1", value: "#7f849c"},
 { label: "Overlay2", value: "#9399b2"},
 { label: "Peach", value: "#fab387"},
 { label: "Pink", value: "#f5c2e7"},
 { label: "Red", value: "#f38ba8"},
 { label: "Rosewater", value: "#f5e0dc"},
 { label: "Sapphire", value: "#74c7ec"},
 { label: "Sky", value: "#89dceb"},
 { label: "Subtext0", value: "#a6adc8"},
 { label: "Subtext1", value: "#bac2de"},
 { label: "Surface0", value: "#313244"},
 { label: "Surface1", value: "#45475a"},
 { label: "Surface2", value: "#585b70"},
 { label: "Teal", value: "#94e2d5"},
 { label: "Text", value: "#cdd6f4"},
 { label: "Yellow", value: "#f9e2af"},
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
          <Option value={value} key={index}  className="pl-6" >
              {label}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default memo(SelectColor);
