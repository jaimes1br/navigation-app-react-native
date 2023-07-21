import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

//Como luce mi estado
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//estado inicial
export const AuthInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//usamos para decir como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

//crear conexto
export const AuthContext = createContext({} as AuthContextProps);

//crear provider
export const AuthProvider = ({ children }: any) => {

    const signIn = () => {
        dispatch({ type: "sigIn"});
    }

    const changeFavoriteIcon = ( iconName: string ) => {
        dispatch({ type: "changeFavIcon", payload: iconName});
    }

    const logout = () => {
        dispatch({ type: "logout"});
    }

    const changeUsername = ( username: string ) => {
        dispatch({type: "changeUsername", payload: username})
    }

    const [ authState, dispatch ] = useReducer(authReducer, AuthInitialState);

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername,
        }}>
            { children }
        </AuthContext.Provider>
    )
}