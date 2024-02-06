import "@/pages/Index/components/Select.css";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { memo, MouseEvent, useEffect, useId, useState } from "react";
import useConfig from "@/hooks/useConfig";

const options: OptionsType[] = [
  { label: "Base", value: "#1e1e2e" },
  { label: "Blue", value: "#89b4fa" },
  { label: "Crust", value: "#11111b" },
  { label: "Flamingo", value: "#f2cdcd" },
  { label: "Green", value: "#a6e3a1" },
  { label: "Lavender", value: "#b4befe" },
  { label: "Mantle", value: "#181825" },
  { label: "Maroon", value: "#eba0ac" },
  { label: "Mauve", value: "#cba6f7" },
  { label: "Overlay0", value: "#6c7086" },
  { label: "Overlay1", value: "#7f849c" },
  { label: "Overlay2", value: "#9399b2" },
  { label: "Peach", value: "#fab387" },
  { label: "Pink", value: "#f5c2e7" },
  { label: "Red", value: "#f38ba8" },
  { label: "Rosewater", value: "#f5e0dc" },
  { label: "Sapphire", value: "#74c7ec" },
  { label: "Sky", value: "#89dceb" },
  { label: "Subtext0", value: "#a6adc8" },
  { label: "Subtext1", value: "#bac2de" },
  { label: "Surface0", value: "#313244" },
  { label: "Surface1", value: "#45475a" },
  { label: "Surface2", value: "#585b70" },
  { label: "Teal", value: "#94e2d5" },
  { label: "Text", value: "#cdd6f4" },
  { label: "Yellow", value: "#f9e2af" },
];

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
    <div className="select">
      <Label htmlFor={id}>Color</Label>
      <div id={id} className="relative p-2">
        <span
          className="size-6 flex cursor-pointer"
          style={{ background: color }}
          onClick={() => setShow(!show)}
        ></span>
        <ul
          className="absolute min-w-32 max-h-80 overflow-y-auto bg-[#1e1e2e] left-1/2 -translate-x-1/2"
          style={{ display: `${show ? "block" : "none"}` }}
        >
          {options.map(({ value, label }, index) => (
            <li value={value} key={index} className="flex">
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
