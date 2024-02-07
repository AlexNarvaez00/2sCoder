import "./index.css";

import Index from "@/pages/Index/Index";
import { ConfigProvider } from "./context/ConfigProvider";
import {Toaster} from "sonner";

export default function App() {
  return (
    <ConfigProvider>
      <main className="w-full min-h-screen">
        <Index />
      </main>
      <Toaster theme="dark" />
    </ConfigProvider>
  );
}
