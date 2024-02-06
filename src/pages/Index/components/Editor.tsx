import '@fontsource-variable/source-code-pro';
import "./editor.css";
import useConfig from "@/hooks/useConfig";
import { FormEvent,  useState, memo, useEffect } from "react";
import { CodeBlock } from "react-code-blocks";
import { VscEdit, VscSymbolNamespace } from "react-icons/vsc";

interface Props {
  language: string;
  theme:string;
}

function Editor({ language, theme }: Props) { 
  const { setState, content } = useConfig();
  
  const [show, setShow] = useState<Boolean>(true);
  const [code, setCode] = useState<string>(content);
  const [colors, setColors] = useState<Object|null>({});
 
  useEffect(() =>{
    import("react-code-blocks").then(module =>{
      setColors(module[theme] as Object);
    });
  },[theme]);

  const handleBlur = (event: FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setState((prev) => {
      return { ...prev, content: value };
    });
    setShow(true);
  };

  const handleChange = (event: FormEvent<HTMLTextAreaElement>) => {
    const value = event.currentTarget.value;
    setCode(value);
  };

  return (
    <>
      <div className="w-full mb-1 flex justify-end">
        <span
          className="w-auto text-[#1e1e2e] p-2 cursor-pointer font-semibold text-lg"
          onClick={() => setShow(!show)}
        >
          {show && <VscEdit />}
          {!show && <VscSymbolNamespace />}
        </span>
      </div>
      {show && (
        <CodeBlock
          text={content}
          language={language}
          theme={colors ?? {}}
        />
      )}
      {!show && (
        <textarea
          onBlur={handleBlur}
          onChange={handleChange}
          value={code}
          className="block p-4 pl-7 w-full border border-[#1e1e2e] bg-[#1e1e2e] min-w-[500px] text-[#cdd6f4] font-source rounded-3xl"
          rows={8}
        ></textarea>
      )}
    </>
  );
}

export default memo(Editor);
