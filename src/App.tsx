import "./index.css";

import Index from "@/pages/Index/Index";
import { ConfigProvider } from "./context/ConfigProvider";

export default function App() {
  return (
    <ConfigProvider>
      <main className="w-full min-h-screen">
        <Index />
      </main>
    </ConfigProvider>
  );
}
