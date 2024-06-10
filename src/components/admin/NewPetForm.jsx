import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import { toast, ToastContainer } from "react-toastify";

import FormText from "../forms/FormText";
import FormSelect from "../forms/FormSelect";
import FormDate from "../forms/FormDate";
import FormRadius from "../forms/FormRadius";
import AddFile from "../forms/AddFile";
import FormButton from "../forms/FormButton";

const NewPetForm = () => {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [species, setSpecies] = useState('');
    const [breed, setBreed] = useState('');
    const [color, setColor] = useState('');
    const [file, setFile] = useState(null);
    const [chipNumber, setChipNumber] = useState('');
    const [markDate, setMarkDate] = useState('');
    const [chipPosition, setChipPosition] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    //Json de la api
    const [allUsers, setAllUsers] = useState([]);
    const [allSpecies, setAllSpecies] = useState([]);
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filteredBreeds, setFilteredBreeds] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchSpeciesInfo = async () => {
            try {
                const [speciesResponse, breedResponse] = await Promise.all([
                    axios.get('/species'),
                    axios.get('/breeds'),
                ]);
                setAllSpecies(speciesResponse.data.data.map(species => ({ label: species.name, value: species.id })));
                setBreeds(breedResponse.data.data);
                setError(null);
            }catch (error) {
                console.error("Error fetching spceies and breeds", error);
                setError("Error al cargar datos de especies y razas");
            };
            setLoading(false);
        };

        const fetchUsers = async () => {
            try {
                const userResponse = await axios.get('/users');
                setAllUsers(userResponse.data.users.filter(user => user.role.includes('owner')).map(user => ({ label: user.name, value: user.id })));
            } catch (error) {
                console.error("Error fetching users", error);
                setError("Error al cargar datos de usuarios");
            }
        };
        fetchSpeciesInfo();
        fetchUsers();
    }, []);

    const sexOptions = [
        {label: 'Macho', value: 'Male' },
        {label: 'Hembra', value: 'Female' }
    ];

    const handleSexChange = (e) => {
        setSex(e.target.value);
    };

    const handleSpeciesChange = (e) => {
        const speciesId = e.target.value;
        setSpecies(speciesId);
        const breedInSpecies = breeds.filter(breed => breed.species.id == speciesId);
        setFilteredBreeds(breedInSpecies.map(breed => ({ label: breed.name, value: breed.id })));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        if (file) {
            // Lista de tipos de imágenes permitidos
            const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
            if (!allowedTypes.includes(file.type)) {
                alert('Por favor, selecciona una imagen válida (JPEG, PNG, SVG).');
                e.target.value = '';
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = {
            name: name,
            birth_date: birthDate,
            color: color,
            sex: sex,
            chip_number: chipNumber,
            chip_marking_date: markDate,
            chip_position: chipPosition,
            user_id: user,
            breed_id: breed,
            };

        if (file) {
            formData.image = file;
        }

        try {
            const petResponse = await axios.post('/pets', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if(petResponse.status === 201) {
                toast.success("¡Mascota creada correctamente!", {theme: "colored", autoClose: 2000});
                
                setTimeout(() => {
                    navigate('/manager');
                }, 3000);
            };
        } catch (e) { 
            if (e.response && e.response.data && e.response.data.message === "The image failed to upload.") {
                setError("La imagen es demasiado grande. Por favor, selecciona una imagen más pequeña. (Máximo 2MB)");
            } else {
                console.error("Error al crear la mascota: " + e);
                setError("Error al crear la mascota");
            }
            setLoading(false);
            console.log("Error:" + error);
        }

    };

    return (
        <div className="bg-[#7F9FB5] rounded-2xl place-self-center grid gap-4 p-3">
            <ToastContainer/>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormText label="Nombre" placeholder="Nombre" value={name} required onChange={(e) => {setName(e.target.value)}}/>
                <FormSelect label="Especie" value={species} options={allSpecies} defaultOption="Indique la especie" onChange={handleSpeciesChange}/>
                { species && <FormSelect label="Raza" value={breed} options={filteredBreeds} defaultOption="Indique la raza" onChange={(e) => setBreed(e.target.value)}/> }
                <FormDate 
                        label="Fecha de nacimiento"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)} 
                        required   
                />
                <FormRadius label="Sexo" options={sexOptions} value={sex} required onChange={handleSexChange}/>
                <FormText label="Color" placeholder="Color" value={color} required onChange={(e) => setColor(e.target.value)}/>
                <AddFile label="Introduzca una imagen " onChange={handleFileChange}/>
                <FormSelect label="Dueño" value={user} options={allUsers} defaultOption="Indique el dueño" onChange={(e) => setUser(e.target.value)}/>
                <FormText label="Numero de chip" placeholder="Numero de chip" value={chipNumber} onChange={(e) => setChipNumber(e.target.value)}/>
                <FormDate 
                    label="Fecha de marcaje" 
                    value={markDate} 
                    onChange={(e) => setMarkDate(e.target.value)}
                />
                <FormText label="Posición del chip" placeholder="Posición del chip" value={chipPosition} onChange={(e) => setChipPosition(e.target.value)}/>
                <div className="mt-5 w-full flex justify-center">
                    {error && <p className="text-red-600">{error}</p>}
                    <FormButton text="Guardar" color="text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-900"/>
                </div>
            </form>
        </div>
    );
};

export default NewPetForm;