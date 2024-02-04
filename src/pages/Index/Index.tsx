import SelectLang from "@/pages/Index/components/SelectLang";
import SelectTheme from "./components/SelectTheme";

export default function Index() {
  return (
    <section>
      <header>
        <nav>
          <ul>
            <li>
              <SelectLang />
            </li>
            <li>
              <SelectTheme />
            </li>
            <li></li>
          </ul>
        </nav>
      </header>
    </section>
  );
}
