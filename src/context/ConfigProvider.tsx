import { ConfigType } from "@/types/ConfigType";
import { createContext, ReactNode, useState } from "react";

interface ProviderState {
  state: ConfigType;
  setState: (state: ConfigType) => void;
}

const initialState: ConfigType = {
  themes: ``,
  background: `#f0c6c6`, 
  language: ``,
};

export const ConfigContext = createContext<ProviderState>({
  state: initialState,
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
