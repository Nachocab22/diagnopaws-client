import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PetIcon = ({ name, image }) => {
    
    const navigate = useNavigate();

    return (
        <div className="w-40 h-40 flex flex-col items-center group">
            <h2 className="text-center text-2xl font-['IBM Plex Sans'] text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute">{name}</h2>
            <button 
                className="w-32 h-32 top-5 rounded-full overflow-hidden mt-3 shadow-md shadow-gray-700 flex items-center justify-center p-0 border-0 relative"
                onClick={() => navigate(`/pets/${name}`)}
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}
                aria-label={`Ver detalles de ${name}`}
            ></button>

        </div>
    );

};

PetIcon.protoType = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default PetIcon;