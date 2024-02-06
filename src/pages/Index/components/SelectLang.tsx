import "@/pages/Index/components/Select.css";
import Option from "@/components/Option";
import Select from "@/components/Select";
import { Label } from "@/components/Label";
import { OptionsType } from "@/pages/Index/types/OptionType";
import { FormEvent, memo, useId, useState } from "react";
import { Props } from "@/pages/Index/types/SelectType";
const options: OptionsType[] = [
  { value: "abap", label: "abap" },
  { value: "actionscript", label: "actionscript" },
  { value: "ada", label: "ada" },
  { value: "arduino", label: "arduino" },
  { value: "autoit", label: "autoit" },
  { value: "c", label: "c" },
  { value: "clojure", label: "clojure" },
  { value: "coffeescript", label: "coffeescript" },
  { value: "cpp", label: "cpp" },
  { value: "csharp", label: "csharp" },
  { value: "css", label: "css" },
  { value: "cuda", label: "cuda" },
  { value: "d", label: "d" },
  { value: "dart", label: "dart" },
  { value: "delphi", label: "delphi" },
  { value: "elixir", label: "elixir" },
  { value: "elm", label: "elm" },
  { value: "erlang", label: "erlang" },
  { value: "fortran", label: "fortran" },
  { value: "foxpro", label: "foxpro" },
  { value: "fsharp", label: "fsharp" },
  { value: "go", label: "go" },
  { value: "gql", label: "gql" },
  { value: "graphql", label: "graphql" },
  { value: "groovy", label: "groovy" },
  { value: "haskell", label: "haskell" },
  { value: "haxe", label: "haxe" },
  { value: "html", label: "html" },
  { value: "java", label: "java" },
  { value: "javascript", label: "javascript" },
  { value: "js", label: "js" },
  { value: "json", label: "json" },
  { value: "jsx", label: "jsx" },
  { value: "julia", label: "julia" },
  { value: "kotlin", label: "kotlin" },
  { value: "latex", label: "latex" },
  { value: "less", label: "less" },
  { value: "lisp", label: "lisp" },
  { value: "livescript", label: "livescript" },
  { value: "lua", label: "lua" },
  { value: "makefile", label: "makefile" },
  { value: "mathematica", label: "mathematica" },
  { value: "matlab", label: "matlab" },
  { value: "objective", label: "objective" },
  { value: "objective", label: "objective" },
  { value: "objectivec", label: "objectivec" },
  { value: "objectpascal", label: "objectpascal" },
  { value: "ocaml", label: "ocaml" },
  { value: "octave", label: "octave" },
  { value: "perl", label: "perl" },
  { value: "php", label: "php" },
  { value: "powershell", label: "powershell" },
  { value: "prolog", label: "prolog" },
  { value: "puppet", label: "puppet" },
  { value: "python", label: "python" },
  { value: "qml", label: "qml" },
  { value: "r", label: "r" },
  { value: "racket", label: "racket" },
  { value: "rest", label: "rest" },
  { value: "restructuredtext", label: "restructuredtext" },
  { value: "ruby", label: "ruby" },
  { value: "rust", label: "rust" },
  { value: "sass", label: "sass" },
  { value: "scala", label: "scala" },
  { value: "scheme", label: "scheme" },
  { value: "shell", label: "shell" },
  { value: "smalltalk", label: "smalltalk" },
  { value: "sml", label: "sml" },
  { value: "sql", label: "sql" },
  { value: "standardml", label: "standardml" },
  { value: "swift", label: "swift" },
  { value: "tcl", label: "tcl" },
  { value: "tex", label: "tex" },
  { value: "text", label: "text" },
  { value: "ts", label: "ts" },
  { value: "tsx", label: "tsx" },
  { value: "typescript", label: "typescript" },
  { value: "vala", label: "vala" },
  { value: "vbnet", label: "vbnet" },
  { value: "verilog", label: "verilog" },
  { value: "vhdl", label: "vhdl" },
  { value: "xml", label: "xml" },
  { value: "xquery", label: "xquery" },
  { value: "yaml", label: "yaml" },
];

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
