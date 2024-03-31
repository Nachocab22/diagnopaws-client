import React from "react";
const FormDni = ({ label, placeholder }) => {

    const validateDni = (dni) => {
        const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letter = String(dni).charAt(8).toUpperCase();
        const number = parseInt(String(dni).substring(0, 8));
        const index = number % 23;
        const expectedLetter = letters.charAt(index);
        return letter === expectedLetter;
    };

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <input type="text" onChange={validateDni} pattern="/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]{1}$/i" className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5 flex-1" placeholder={placeholder} required title="Introduzca un formato de DNI válido" />
        </div>
    );
};

export default FormDni;
