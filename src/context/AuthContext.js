import React, { createContext, useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import * as Utils from "../utils/env.js";
import * as AuthService from "../services/AuthService";

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [token, setToken] = useState("");
    const [user, setUser] = useState();

    useEffect(() =>{
        if(cookies.token){
            AuthService.validate(cookies.token).then(res => {
                setUser(Utils.decodeJwt(cookies.token));
                setToken(cookies.token);
            }).catch(() => {
                logout();
            });
        };
    }, [cookies.token]);

    const saveUser = (data) => {
        setCookie('token', data);
        setToken(data);
        setUser(Utils.decodeJwt(data))
    };
    
    const logout = () => {
        removeCookie("token");
        setToken("");
        setUser()
    };

    return (<AuthContext.Provider value={{
            user, 
            token,
            saveUser,
            logout,
        }}>
            {children}
    </AuthContext.Provider>)
}