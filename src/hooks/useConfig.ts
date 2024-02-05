import { ConfigContext } from "@/context/ConfigProvider";
import { useContext } from "react";

export default function useConfig() {
  const context = useContext(ConfigContext);
  if (context == undefined) {
    throw new Error("useConfig need provider");
  }
  return { ...context.state, setState: context.setState };
}
