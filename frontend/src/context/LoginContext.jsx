import { createContext, useReducer } from "react";

export const LoginContext = createContext();

export const LoginReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        login: action.payload,
      };
    case "CREATE_LOGIN":
      return {
        login: [action.payload, ...state.login],
      };
    default:
      return state;
  }
};

export const LoginContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, {
    login: null,
  });

  return (
    <LoginContext.Provider value={{ ...state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
