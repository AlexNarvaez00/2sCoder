import "@/pages/Index/components/Select.css";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { FormEvent, memo, useId, useState} from "react";
//import { Props } from "@/pages/Index/types/SelectType";

interface Props{
  onChange: (event:FormEvent<HTMLSelectElement>) => void;
}

function SelectExport({ onChange }:Props) {
  const id = useId();
  const [state,setState] = useState<string>("ff");


  const handleChange = (event:FormEvent<HTMLSelectElement>) => {
    onChange(event);
  }

  return (
    <div className="select">
      <Label htmlFor={id}>Export</Label>
      <Select id={id} name="export" onChange={handleChange} value={state}>
        <Option value="ff">formatt</Option>
        <Option value={`clp`}>Clipboard</Option>
        <Option value={`png`}>Png</Option>
      </Select>
    </div>
  )
}

export default memo(SelectExport); 
