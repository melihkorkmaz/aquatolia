import { ReactNode, useState } from 'react';
import { defaultLocale } from "@/i18n";

import { AppContext, AppContextSetter, AppContextType } from './AppContext';

interface AppProviderProps {
  children: ReactNode
};

export default function AppProvider({ children }: AppProviderProps) {
  const [appState, setAppState] = useState<AppContextType>({
    mainNavigation: [],
    categories: [],
    language: defaultLocale 
  });

  return (
    <AppContext.Provider value={appState}>
      <AppContextSetter.Provider value={{ setAppState }}>
      {children}
      </AppContextSetter.Provider>
    </AppContext.Provider>
  )
};
