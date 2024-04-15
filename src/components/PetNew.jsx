import React from "react";
import { useNavigate } from "react-router-dom";

const PetIcon = () => {
    
    const navigate = useNavigate();

    return (
        <div className="w-20 md:w-40 h-20 md:h-40 flex flex-col items-center group">
            <h2 className="text-center text-2xl font-['IBM Plex Sans'] text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute">Nueva mascota</h2>
            <button 
                className="w-32 h-32 top-5 rounded-full overflow-hidden mt-3 shadow-md bg-zinc-300 shadow-gray-700 flex items-center justify-center p-0 border-0 relative"
                onClick={() => navigate(`/pets/new`)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    );

};

export default PetIcon;