import { ConfigType } from "@/types/ConfigType";
import { createContext, ReactNode, useState } from "react";

interface ProviderState {
  state: ConfigType;
  setState: (state: ConfigType | ((state: ConfigType) => ConfigType)) => void;
}

const initialState: ConfigType = {
  theme: `dracula`,
  background: `#cba6f7`,
  language: `typescript`,
  content: `import React from 'react'

export default function ConfigProvider() {
  return (
    <div>ConfigProvider</div>
  )
}`,
};

export const ConfigContext = createContext<ProviderState>({
  state: initialState,
  //@ts-ignore
  setState: (state) => null,
});

interface Props {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: Props) => {
  const [state, setState] = useState<ConfigType>(initialState);

  return (
    <ConfigContext.Provider value={{ state, setState }}>
      {children}
    </ConfigContext.Provider>
  );
};



