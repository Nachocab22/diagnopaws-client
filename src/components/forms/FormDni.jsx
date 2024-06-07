import React, { useState } from "react";
const FormDni = ({value, onChange}) => {


    const [isValid, setIsValid] = useState(false);

    const validateDni = (dni) => {
        if (dni.length !== 9) return false;

        const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letter = String(dni).charAt(8).toUpperCase();
        const number = parseInt(String(dni).substring(0, 8));
        const index = number % 23;
        const expectedLetter = letters.charAt(index);

        return letter === expectedLetter;
    };

    const handleDniChange = (e) => {
        const inputDni = e.target.value.toUpperCase();
        onChange(inputDni);

        const validationResult = validateDni(inputDni);
        setIsValid(validationResult);
    }

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label htmlFor="dni" className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">DNI</label>
            <div className="w-full">
                <div className="relative w-full">
                    <input 
                        id="dniInput" 
                        type="text" 
                        value={value}
                        onChange={handleDniChange} 
                        className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start flex-1" 
                        placeholder='DNI'
                        maxLength={9}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                        </svg>
                    </div>
                </div>
                {!isValid && value && <span className="text-red-600 text-sm">El DNI no es válido</span>}
            </div>
        </div>
    );
};

export default FormDni;
