import React, { createContext, ReactNode, useReducer } from "react";
import {
  themeInitialState,
  themeReducer,
  ThemeType,
} from "../reducers/themeReducer";
import {
  userInitialState,
  userReducer,
  UserType,
} from "../reducers/useReducer";
import { reducerActionType } from "../types/reducerActionType";

type InitialStateType = {
  user: UserType;
  theme: ThemeType;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};
const InitialState = {
  user: userInitialState,
  theme: themeInitialState,
};

export const Context = createContext<ContextType>({
  state: InitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
  theme: themeReducer(state.theme, action),
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(mainReducer, InitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
