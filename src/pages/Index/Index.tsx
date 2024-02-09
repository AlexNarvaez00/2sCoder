import "@fontsource-variable/onest";
import "@/pages/Index/components/editor.css";
import SelectLang from "@/pages/Index/components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import SelectColor from "./components/SelectColor";
import useConfig from "@/hooks/useConfig";
import { FormEvent,useCallback, useRef } from "react";
import Editor from "@/pages/Index/components/Editor";
import { downloadImage, putInClipboard } from "./service/Image";
import { toast } from "sonner";
import SelectExport from "./components/SelectExport";

export default function Index() {
  const { background, language, setState, theme } = useConfig();
  const editorRef = useRef<HTMLDivElement | null>(null);

  const handleChange = useCallback((event: FormEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleDownload = useCallback(
    //@ts-ignore
    (event: FormEvent<HTMLSelectElement>) => {
      const value = event.currentTarget.value;
      if (!editorRef.current) return;
      if (value === "clp") {
        putInClipboard(editorRef.current).then((res) => {
          if (res == "ok") toast("Image copied to clipboard 🚀");
        });
      }
      if (value === "png") {
        downloadImage(editorRef.current).then();
        toast("Image downloaded 🚀");
      }
    },
    [editorRef],
  );

  return (
    <div style={{ background }} className="w-full">
      <section className="w-full max-w-3xl min-h-screen p-4 md:p-7 flex flex-wrap gap-2 mx-auto">
        <h1 className="w-full font-onest font-bold text-4xl text-center text-ctp-base">
          Create images from blocks of source code.
        </h1>
        <header className="w-full max-w-6xl mx-auto flex">
          <nav className="mx-auto w-full md:w-auto">
            <ul className="flex flex-wrap justify-start md:justify-center gap-2 md:flex-row">
              <li className="w-full md:w-auto">
                <SelectLang onChange={handleChange} value={language} />
              </li>
              <li className="w-full md:w-auto">
                <SelectTheme onChange={handleChange} value={theme} />
              </li>
              <li className="w-1/4 md:w-auto">
                <SelectColor value={background} />
              </li>
              <li className="w-1/2 md:w-auto">
                {/* <IconDownload onClick={handleDownload} />*/}
                <SelectExport onChange={handleDownload} />
              </li>
            </ul>
          </nav>
        </header>
        <div
          ref={editorRef}
          className="w-full px-8 pb-8 md:px-24 self-center mx-auto md:pb-16 md:pt-14 box-border"
          style={{ background }}
        >
          <section className="max-w-lg mx-auto editor">
            <Editor language={language} theme={theme} />
          </section>
        </div>
        <footer className="w-full self-end mx-auto text-center">
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
    </div>
  );
}
