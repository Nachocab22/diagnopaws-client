import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormText from "./forms/FormText";
import FormSelect from "./forms/FormSelect";
import FormDate from "./forms/FormDate";
import FormRadius from "./forms/FormRadius";

const NewPetForm = () => {
    const [sex, setSex] = useState('');
    const navigate = useNavigate();

    const sexOptions = [
        {label: 'Macho', value: 'M' },
        {label: 'Hembra', value: 'F' }
    ];

    const speciesOptions = [
        {label: 'Perro', value: 'Perro' },
        {label: 'Gato', value: 'Gato' },
        {label: 'Pajaro', value: 'Pajaro' },
        {label: 'Caballo', value: 'Caballo' }
    ];

    const handleSexChange = (e) => {
        setSex(e.target.value);
    };

    return (
        <div>
            <form className="flex flex-col gap-3 bg-[#7F9FB5]">
                <FormText label="Nombre" placeholder="Nombre" />
                <FormSelect label="Especie" />
                <FormDate label="Fecha de nacimiento" />
                <FormSelect label="Raza" placeholder="Raza" />
                <FormRadius label="Sexo" options={sexOptions} value={sex} onChange={handleSexChange}/>
                <FormText label="Color" placeholder="Color" />
            </form>
        </div>
    );
};

export default NewPetForm;