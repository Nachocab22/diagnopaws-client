import React, { useState } from "react";
const FormDni = () => {

    const [dni, setDni] = useState("");
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
        setDni(inputDni);

        const validationResult = validateDni(inputDni);
        setIsValid(validationResult);
    }

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label htmlFor="dni" className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">DNI</label>
            <input 
                id="dniInput" 
                type="text" 
                value={dni}
                onChange={handleDniChange} 
                className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5 flex-1" 
                placeholder='DNI'
                maxLength={9}
            />
            {!isValid && <span className="text-red-600 text-sm">El DNI no es válido</span>}
        </div>
    );
};

export default FormDni;
