import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import { toast, ToastContainer } from "react-toastify";

import FormText from "../forms/FormText";
import FormButton from "../forms/FormButton";

const NewVaccineForm = () => {
    const [name, setName] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [sicknessesTreated, setSicknessesTreated] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = {
            name: name,
            manufacturer: manufacturer,
            sicknesses_treated: sicknessesTreated,
        };

        try {
            const petResponse = await axios.post('/vaccines', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(petResponse.status === 201) {
                toast.success("¡Vacuna creada correctamente!", {theme: "colored", autoClose: 2000});
                
                setTimeout(() => {
                    navigate('/manager');
                }, 3000);
            };
        } catch (e) { 
                console.error("Error al crear la mascota: " + e);
                setError("Error al crear la mascota");
            }   
            setLoading(false);
        };

    return (
        <div className="bg-[#7F9FB5] dark:bg-[#3a4a5b] rounded-2xl place-self-center grid gap-4 p-3">
            <ToastContainer/>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormText label="Nombre" placeholder="Nombre" value={name} required onChange={(e) => {setName(e.target.value)}}/>
                <FormText label="Fabricante" placeholder="Fabricante" value={manufacturer} required onChange={(e) => {setManufacturer(e.target.value)}}/>
                <FormText label="Enfermedades tratadas" placeholder="Enfermedades tratadas (Enfermedad1, Enfermedad2, ...)" value={sicknessesTreated} required onChange={(e) => {setSicknessesTreated(e.target.value)}}/>
                <div className="mt-5 w-full flex justify-center">
                    {error && <p className="text-red-600">{error}</p>}
                    <FormButton text="Guardar" color="text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-900"/>
                </div>
            </form>
        </div>
    );
};

export default NewVaccineForm;