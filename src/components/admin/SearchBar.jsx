import React from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({value, onChange, submit}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(value);
    }

    return (
        <form onSubmit={handleSubmit} className="relative w-full h-14">
            <input 
                type="text" 
                placeholder="Buscar..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-full rounded-full shadow-sm bg-zinc-100 shadow-gray-700 px-6 text-3xl font-['Kefa'] pr-12" 
            />
            <button
                type="submit"
                className="absolute flex right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full text-gray-200 justify-center items-center bg-slate-800"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor" 
                    className="size-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                    />
                </svg>
            </button>
        </form>
    );

};

export default SearchBar;