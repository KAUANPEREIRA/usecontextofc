import React, { createContext, useReducer } from "react";
import {
  userInitialState,
  userReducer,
  UserType,
} from "../reducers/useReducer";
import { reducerActionType } from "../types/reducerActionType";

type InitialStateType = {
  user: UserType;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};
const InitialState = {
  user: userInitialState,
};

export const Context = createContext<ContextType>({
  state: InitialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, InitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
