import "@fontsource-variable/onest";
import "@/pages/Index/components/editor.css";
import SelectLang from "@/pages/Index/components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import SelectColor from "./components/SelectColor";
import useConfig from "@/hooks/useConfig";
import { FormEvent, MouseEvent, useCallback, useRef } from "react";
import Editor from "@/pages/Index/components/Editor";
import IconDownload from "@/pages/Index/components/IconDownload";
import { putInClipboard } from "./service/Image";
import { toast } from "sonner";

export default function Index() {
  const { background, language, setState, theme } = useConfig();
  const editorRef = useRef<HTMLDivElement | null>(null);

  const handleChange = useCallback((event: FormEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleDownload = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (!editorRef.current) return;
      putInClipboard(editorRef.current).then((res) => {
        if (res == "ok") toast("Image copied to clipboard 🚀");
      });
    },
    [editorRef]);

  return (
  <div style={{ background }} className="w-full">
    <section
      className="w-full max-w-3xl min-h-screen p-10 flex flex-wrap gap-4 mx-auto"
    >
      <h1 className="w-full font-onest font-bold text-4xl text-center text-ctp-base">
        Create images from blocks of source code.
      </h1>
      <header className="w-full max-w-5xl mx-auto flex">
        <nav className="mx-auto">
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
            <li>
              <IconDownload onClick={handleDownload} />
            </li>
          </ul>
        </nav>
      </header>
      <div
        ref={editorRef}
        className="w-full px-24 self-center mx-auto py-16 box-border"
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
