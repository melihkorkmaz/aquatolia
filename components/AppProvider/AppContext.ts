import { CategoryType } from "@/types/Category";
import { NavigationType } from "@/types/Navigation";
import { createContext } from "react";

export interface AppContextType {
  mainNavigation: NavigationType[];
  categories: CategoryType[];
  language: string;
}

export interface AppContextSetterType {
  setAppState: (newState: AppContextType) => void;
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
export const AppContextSetter = createContext<AppContextSetterType>({} as AppContextSetterType);
