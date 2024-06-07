import React from "react";
import { useNavigate } from "react-router-dom";

const PetNew = ({route}) => {
    
    const navigate = useNavigate();

    return (
        <div className="w-20 h-14 flex flex-col items-center group relative">
            <button 
                className="w-full h-full rounded-full overflow-hidden shadow-sm bg-zinc-100 shadow-gray-500 flex items-center justify-center"
                onClick={() => navigate({route})}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    );

};

export default PetNew;