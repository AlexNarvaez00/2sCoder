import "@/pages/Index/components/Select.css";
import { Label } from "@/components/Label";
import { memo, MouseEvent, useEffect, useId, useState } from "react";
import useConfig from "@/hooks/useConfig";
import options from "@/pages/Index/service/Colors";

interface Props {
  value: string;
}

function SelectColor({ value }: Props) {
  const [color, setColor] = useState(value);
  const [show, setShow] = useState<boolean>(false);
  const { setState } = useConfig();
  const id = useId();

  const handleClick =
    (color: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setColor(color);
      setState((prev) => ({ ...prev, background: color }));
      //setShow(false);
    };

  const clickOutside = () => {
    setShow(false);
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside, true);
    return () => {
      setShow(false);
      document.removeEventListener("click", clickOutside, true);
    };
  }, [color]);

  return (
    <div className="select justify-between">
      <Label htmlFor={id}>Color</Label>
      <div id={id} className="relative p-2">
        <span
          className="size-5 flex cursor-pointer"
          style={{ background: color }}
          onClick={() => setShow(!show)}
        ></span>
        <ul
          className="absolute min-w-32 max-h-80 overflow-y-auto bg-[#1e1e2e] left-1/2 -translate-x-1/2"
          style={{ display: `${show ? "block" : "none"}` }}
        >
          {options.map(({ value, label }, index) => (
            <li value={value} key={index} className="flex hover:bg-gray-200/10">
              <a
                href="#"
                onClick={handleClick(value)}
                className="flex pl-3 gap-2 items-center py-1"
              >
                <span
                  className="flex size-4"
                  style={{ background: value }}
                ></span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(SelectColor);
