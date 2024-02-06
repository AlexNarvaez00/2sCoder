import '@fontsource-variable/onest';
import SelectLang from "@/pages/Index/components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import SelectColor from "./components/SelectColor";
import useConfig from "@/hooks/useConfig";
import { FormEvent, useCallback } from "react";
import Editor from "@/pages/Index/components/Editor";

export default function Index() {
  const { background, language, setState, theme } = useConfig();

  const handleChange = useCallback((event: FormEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  return (
    <section
      className="w-full min-h-screen p-10 flex flex-col gap-5 "
      style={{ background }}
    >
      <h1>Create block code in a image</h1>
      <header className="max-w-5xl mx-auto">
        <nav>
          <ul className="flex gap-4">
            <li>
              <SelectLang onChange={handleChange} value={language} />
            </li>
            <li>
              <SelectTheme onChange={handleChange}  value={theme}  />
            </li>
            <li>
              <SelectColor value={background} />
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-5xl [&>span]:min-w-[500px] [&>span]:py-3 self-center m-auto" style={{ background }}  > 
        <Editor language={language} theme={theme} />
      </main>
      <footer className="self-end mx-auto">
          By Alexis Narvaez 💜
      </footer>
    </section>
  );
}
