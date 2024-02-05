import "@/pages/Index/components/Select.css";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { useId } from "react";

const options: OptionsType[] = [
  { label: "A11y Dark", value: "a11yDark"},
  { label: "A11y Light", value: "a11yLight"},
  { label: "An Old Hope", value: "anOldHope"},
  { label: "Androidstudio", value: "androidstudio"},
  { label: "Arta", value: "arta"},
  { label: "Atom One Dark", value: "atomOneDark"},
  { label: "Atom One Light", value: "atomOneLight"},
  { label: "Codepen", value: "codepen"},
  { label: "Dracula", value: "dracula"},
  { label: "Far", value: "far"},
  { label: "Github", value: "github"},
  { label: "Googlecode", value: "googlecode"},
  { label: "Hopscotch", value: "hopscotch"},
  { label: "Hybrid", value: "hybrid"},
  { label: "Ir Black", value: "irBlack"},
  { label: "Mono Blue", value: "monoBlue"},
  { label: "Monokai Sublime", value: "monokaiSublime"},
  { label: "Monokai", value: "monokai"},
  { label: "Nord", value: "nord"},
  { label: "Noctis Viola", value: "noctisViola"},
  { label: "Obsidian", value: "obsidian"},
  { label: "Ocean", value: "ocean"},
  { label: "Paraiso Dark", value: "paraisoDark"},
  { label: "Paraiso Light", value: "paraisoLight"},
  { label: "Pojoaque", value: "pojoaque"},
  { label: "Purebasic", value: "purebasic"},
  { label: "Railscast", value: "railscast"},
  { label: "Rainbow", value: "rainbow"},
  { label: "Shades Of Purple", value: "shadesOfPurple"},
  { label: "Solarized Dark", value: "solarizedDark"},
  { label: "Solarized Light", value: "solarizedLight"},
  { label: "Sunburst", value: "sunburst"},
  { label: "Tomorrow Night Blue", value: "tomorrowNightBlue"},
  { label: "Tomorrow Night Bright", value: "tomorrowNightBright"},
  { label: "Tomorrow Night", value: "tomorrowNight"},
  { label: "Tomorrow", value: "tomorrow"},
  { label: "Vs2015", value: "vs2015"},
  { label: "Xt256", value: "xt256"},
  { label: "Zenburn", value: "zenburn"},
  { label: "Tomorrow Night Eightis", value: "tomorrowNightEighties"},
];

export default function SelectTheme() {
  const id = useId();

  return (
    <div className="select">
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
