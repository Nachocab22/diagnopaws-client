import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import Button from "./Button";

const user = localStorage.getItem('user');

const LogOut = () => {
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await axios.post('/logout');
            localStorage.clear();
            sessionStorage.clear();
            navigate('/login');
        } catch (error) {
            console.error("Logout error", error);
        }
    };

    return (
        <button className="p-2 bg-zinc-300 rounded-full" onClick={handleLogOut}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
        </button>
    );
}

export default LogOut;