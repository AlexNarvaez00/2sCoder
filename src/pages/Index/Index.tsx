import "@fontsource-variable/onest";
import "@/pages/Index/components/editor.css";
import SelectLang from "@/pages/Index/components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import SelectColor from "./components/SelectColor";
import useConfig from "@/hooks/useConfig";
import { FormEvent, useCallback } from "react";
import Editor from "@/pages/Index/components/Editor";
import { useToPng } from "@hugocxl/react-to-image";

export default function Index() {
  const { background, language, setState, theme } = useConfig();
  const [_, convertToPng, ref] = useToPng<HTMLDivElement>({
    onSuccess: (data) => {
      navigator.clipboard.writeText(data).then(()=>{
        alert("copiado");
      });
      //console.log(data);
    },
  });

  const handleChange = useCallback((event: FormEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <section
      className="w-full min-h-screen p-10 flex flex-col gap-4"
      style={{ background }}
    >
      <h1 className="font-onest font-bold text-4xl text-center text-ctp-base">
        Create images from blocks of source code.
      </h1>
      <header className="max-w-5xl mx-auto">
        <nav>
          <ul className="flex gap-4">
            <li>
              <SelectLang onChange={handleChange} value={language} />
            </li>
            <li>
              <SelectTheme onChange={handleChange} value={theme} />
            </li>
            <li>
              <SelectColor value={background} />
            </li>
            <li onClick={convertToPng}>convert</li>
          </ul>
        </nav>
      </header>
      <div
        ref={ref}
        className="w-full px-32 py-14 self-center m-auto"
        style={{ background }}
      >
        <section className="max-w-lg mx-auto editor">
          <Editor language={language} theme={theme} />
        </section>
      </div>
      <footer className="self-end mx-auto">
        By{" "}
        <a
          href="https://alexisnarvaezruiz.vercel.app/"
          target="_blank"
          className="underline"
        >
          Alexis Narvaez
        </a>{" "}
        💜, for you |{" "}
        <a
          href="https://www.linkedin.com/in/alexis-narvaez-ruiz"
          target="_blank"
        >
          Linkeln
        </a>
      </footer>
    </section>
  );
}
