import React, {createContext, useState, useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "../axiosConfig";

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        try {
            const response = await axios.post('/login', credentials);
            return response;
        } catch (error) {
            console.error("Login error", error);
        }
    };

    return (
        <UserContext.Provider value={{user, setUser, login}}>
            {children}
        </UserContext.Provider>
    );
};