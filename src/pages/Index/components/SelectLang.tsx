import "@/pages/Index/components/Select.css";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { FormEvent, memo, useId, useState } from "react";
import { Props } from "@/pages/Index/types/SelectType";
import options from "@/pages/Index/service/Langs";

function SelectLang({ onChange, value }: Props) {
  const [state, setState] = useState<string>(value);
  const id = useId();

  const handleChange = (event: FormEvent<HTMLSelectElement>) => {
    onChange(event);
    setState(event.currentTarget.value);
  };

  return (
    <div className="select">
      <Label htmlFor={id}>Language</Label>
      <Select id={id} name="language" onChange={handleChange} value={state} >
        {options.map(({ value, label }, index) => (
          <Option value={value} key={index}>
            {label}
          </Option>
        ))}
      </Select>
    </div>
  );
}

export default memo(SelectLang);
