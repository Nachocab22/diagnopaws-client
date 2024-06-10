import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from "../../axiosConfig";

import FormButton from '../../components/forms/FormButton';
import FormText from '../../components/forms/FormText';
import FormPassword from "../../components/forms/FormPassword";
import FormMail from "../../components/forms/FormMail";
import FormDate from "../../components/forms/FormDate";
import FormSelect from "../../components/forms/FormSelect";
import FormPhone from "../../components/forms/FormPhone";
import FormDni from "../../components/forms/FormDni";
import FormAddress from "../../components/forms/FormAddress";

const NewUserForm = () => {

    const navigate = useNavigate();
    const [addressData, setAddressData] = useState({});

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState(null);
    const [dni, setDni] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Control de errores y carga
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Respuestas de la api
    const [genders, setGenders] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try{
            const addressResponse = await axios.post('/addresses', {
                street: addressData.street,
                number: parseInt(addressData.number, 10),
                flat: addressData.flat,
                town_id: parseInt(addressData.town_id, 10),
            });

            const addressId = addressResponse.data.address.id;

            const userResponse = await axios.post('/users', {
                name: name,
                surname: lastName,
                birth_date: birthDate,
                dni: dni,
                phone: phone || "",
                email: email,
                password: password,
                gender_id: gender,
                address_id: addressId,
            });
            
            if(userResponse.status === 201) {
                toast.success("Usuario creado correctamente!", {theme: "colored", autoClose: 3000});
                setTimeout(() => {
                    navigate('/manager');
                }, 3000);
            }
        }catch (error) {
            if (error?.response?.data?.errors) {
                setError(Object.values(error.response.data.errors).flat());
            } else {
                console.error("Error al crear al usuario: " + error);
                setError("Error al crear el usuario");
            }
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchGenders = async () => {
            setError(null);
            try {
                const response = await axios.get('/genders');
                setGenders(response.data.data.map(gender => ({ label: gender.name, value: gender.id })));
            } catch (error) {
                console.error("Error al cargar los generos: " + error);
                setError("Error al cargar los géneros");
            }
        }
        fetchGenders();
    }, []);

    return (
        <div className="bg-[#7F9FB5] rounded-2xl place-self-center grid gap-4 p-3">
            <ToastContainer/>
            <form onSubmit={handleSubmit} className="p-3 bg-[#7F9FB5] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormText 
                    label="Nombre" 
                    placeholder="Nombre"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                />
                <FormText
                    label="Apellidos"
                    placeholder="Apellidos"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                />
                <FormDate 
                    label="Fecha de nacimiento"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}    
                />
                <FormSelect 
                    label="Género" 
                    options={genders} 
                    defaultOption={'Seleccione su género'}
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)}
                />
                <FormDni 
                    value={dni}
                    onChange={setDni}    
                />
                <FormPhone
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div className="col-span-2">
                    <FormAddress onChange={setAddressData}/>
                </div>
                <FormMail 
                    label="Correo electrónico" 
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <FormPassword
                    value={password}
                    linkColor="text-zinc-100"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="mt-5 w-full flex justify-center">
                    <FormButton text="Guardar" color="text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-900"/>
                    {error && <p className="text-red-600">{error}</p>}
                </div>
            </form>
        </div>
    );

};

export default NewUserForm;