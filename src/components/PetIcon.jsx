import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Triangle = ({position}) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 600 600" 
                className={`w-14 h-14 z-10 absolute text-[#7F9FB5] ${position} transform -translate-y-1/2 transition-transform duration-300 ease-in-out md:-rotate-90`}
            >
                <path
                    d="M405.5389225211667 342.2155703241949C428.59281147787243 311.9760505691493 311.07783243327606 158.53294296416888 264.52094766765106 158.08384119821835C217.96406290202606 157.63473943226782 102.69461811849742 308.8323382074957 126.19761392741668 339.5209597284918C149.70060973633596 370.2095812494879 382.48503356446093 372.4550900792405 405.5389225211667 342.2155703241949C428.59281147787243 311.9760505691493 311.07783243327606 158.53294296416888 264.52094766765106 158.08384119821835"
                    fill="currentColor"
                    transform="matrix(0.9925187343750003,5.551115123125783e-17,-5.551115123125783e-17,0.9925187343750003,36.200398339577816,41.033649264703854)"
                    strokeWidth="0"
                    stroke="hsl(340, 45%, 30%)"
                ></path>
                <defs>
                    <linearGradient id="SvgjsLinearGradient1000">
                    <stop stopColor="hsl(340, 45%, 50%)" offset="0"></stop>
                    <stop stopColor="hsl(340, 45%, 80%)" offset="1"></stop>
                    </linearGradient>
                    <radialGradient id="SvgjsRadialGradient1001">
                    <stop stopColor="hsl(340, 45%, 50%)" offset="0"></stop>
                    <stop stopColor="hsl(340, 45%, 80%)" offset="1"></stop>
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
};

const PetIcon = ({ name, image, isSelected, onClick }) => {
    
    const navigate = useNavigate();

    return (
        <div onClick={onClick} className="w-40 h-40 flex flex-col items-center group relative cursor-pointer">
            {isSelected && <Triangle position="md:left-[150px] left-[55px] md:top-20 top-40"/>}
            <h2 className="text-center text-2xl font-['IBM Plex Sans'] text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">{name}</h2>
            <button 
                className="w-32 h-32 rounded-full overflow-hidden mt-3 shadow-md shadow-gray-700 flex items-center justify-center p-0 border-0 z-10"
                onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}
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

PetIcon.propType = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};

export default PetIcon;