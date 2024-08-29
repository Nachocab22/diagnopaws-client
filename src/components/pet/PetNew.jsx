import React from "react";
import { useNavigate } from "react-router-dom";

const PetNew = () => {
    
    const navigate = useNavigate();

    return (
        <div className="w-40 h-40 flex flex-col items-center group relative">
            <h2 className="-top-[13px] text-center text-xl font-['IBM Plex Sans'] text-slate-700 dark:text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute">Nueva mascota</h2>
            <button 
                className="w-32 h-32 rounded-full overflow-hidden mt-3 shadow-md bg-zinc-300 dark:bg-zinc-200 shadow-gray-700 dark:shadow-gray-500 flex items-center justify-center p-0 border-0 relative"
                onClick={() => navigate('/pets/new')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    );

};

export default PetNew;