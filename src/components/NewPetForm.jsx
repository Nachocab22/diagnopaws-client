import {useState} from "react";
import { useNavigate } from "react-router-dom";
import FormText from "./forms/FormText";
import FormSelect from "./forms/FormSelect";
import FormDate from "./forms/FormDate";
import FormRadius from "./forms/FormRadius";
import AddFile from "./forms/AddFile";

const NewPetForm = () => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [species, setSpecies] = useState('');
    const [breed, setBreed] = useState('');
    const [color, setColor] = useState('');
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

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Lista de tipos de imágenes permitidos
            const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
            if (!allowedTypes.includes(file.type)) {
                alert('Por favor, selecciona una imagen válida (JPEG, PNG, SVG).');
                e.target.value = '';
            }
        }
    };

    return (
        <div className="bg-[#7F9FB5] rounded-2xl place-self-center grid gap-4 p-3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormText label="Nombre" placeholder="Nombre" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <FormSelect label="Especie" value={species} onChange={(e) => setSpecies(e.target.value)}/>
                <FormDate label="Fecha de nacimiento"/>
                <FormSelect label="Raza" value={breed} onChange={(e) => setBreed(e.target.value)}/>
                <FormRadius label="Sexo" options={sexOptions} value={sex} onChange={handleSexChange}/>
                <FormText label="Color" placeholder="Color" value={color} onChange={(e) => setColor(e.target.value)}/>
                <AddFile label="Introduzca una imagen " onChange={handleFileChange}/>
                <div className="mt-5 md:mr-5 justify-center md:justify-end flex items-center">
                    <input type="submit" value="Guardar" onClick={() => navigate('/pets')} className="w-40 h-9 rounded-lg text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-900"/>
                </div>
            </form>
        </div>
    );
};

export default NewPetForm;