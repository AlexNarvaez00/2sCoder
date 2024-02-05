import SelectLang from "@/pages/Index/components/SelectLang";
import SelectTheme from "./components/SelectTheme";
import SelectColor from "./components/SelectColor";
import useConfig from "@/hooks/useConfig";
import { FormEvent, useCallback } from "react";
import Editor from "@/pages/Index/components/Editor";

export default function Index() {
  const { background, language, setState } = useConfig();

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
      <header className="max-w-5xl mx-auto">
        <nav>
          <ul className="flex gap-4">
            <li>
              <SelectLang onChange={handleChange} value={language} />
            </li>
            <li>
              <SelectTheme />
            </li>
            <li>
              <SelectColor onChange={handleChange} value={background} />
            </li>
          </ul>
        </nav>
      </header>
      <main className="max-w-5xl [&>span]:min-w-[500px] [&>span]:py-3 self-center m-auto">
        <Editor language={language} />
      </main>
    </section>
  );
}
