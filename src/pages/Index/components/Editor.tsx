import useConfig from "@/hooks/useConfig";
import { FormEvent,  useState } from "react";
import { CodeBlock } from "react-code-blocks";
import { VscEdit, VscSymbolNamespace } from "react-icons/vsc";

interface Props {
  language: string;
}

//const theme = await import("react-code-blocks/src/themes/dracula");

export default function Editor({ language }: Props) {
  const [show, setShow] = useState<Boolean>(true);
  const [code, setCode] = useState<string>(``);
  const { setState, content } = useConfig();

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
        />
      )}
      {!show && (
        <textarea
          onBlur={handleBlur}
          onChange={handleChange}
          value={code}
          className="block p-4 w-full rounded-lg border border-[#1e1e2e] bg-[#1e1e2e] min-w-[500px] text-[#cdd6f4]"
          rows={8}
        ></textarea>
      )}
    </>
  );
}
