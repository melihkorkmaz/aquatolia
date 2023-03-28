import { useContext, useEffect } from "react";
import { AppContext, AppContextSetter, AppContextType } from "./AppContext";
import isEqual from "lodash.isequal";

export default function useInitAppState(props: AppContextType) {
  const { setAppState } = useContext(AppContextSetter);
  const appState = useContext(AppContext);

  useEffect(() => {
    if (!isEqual(appState, props)) {
      setAppState(props);
    }
  }, [props, setAppState, appState]);
};

