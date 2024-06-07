import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "../../contexts/UserContext";

import axios from "../../axiosConfig";
import Text from '../../components/general/Text';
import Link from '../../components/general/Link';
import FormButton from '../../components/forms/FormButton';
import FormText from '../../components/forms/FormText';
import Title from "../../components/general/Title";
import FormPassword from "../../components/forms/FormPassword";
import FormMail from "../../components/forms/FormMail";
import FormDate from "../../components/forms/FormDate";
import FormSelect from "../../components/forms/FormSelect";
import FormPhone from "../../components/forms/FormPhone";
import FormDni from "../../components/forms/FormDni";
import FormAddress from "../../components/forms/FormAddress";

const Register = () => {

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
    const { login, setUser } = useUser();

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

            const userResponse = await axios.post('/register', {
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
                toast.success("¡Registrado correctamente!", {theme: "colored", autoClose: 3000});
                await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(async response => {
                    const loginResponse = await login({email, password});
                    if(loginResponse.data.user){
                        setUser(loginResponse.data.user);
                        localStorage.setItem('user', JSON.stringify(loginResponse.data.user));
                        setTimeout(() => {
                            navigate('/pets');
                        }, 3000);
                    }
                });
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
        <div className="bg-[#fbfcfc] grid grid-flow-col md:grid-cols-2 h-screen">
            <div className="hidden md:block bg-zinc-300">
                <img src="https://placedog.net/1000?random" alt="Imagen de fondo" className="object-cover bg-cover w-full h-full"/>
            </div>
            <div className="p-3 place-self-center grid grid-flow-row gap-4">
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    style={{ zIndex: 9999, backgroundColor: 'transparent' }}
                />
                <Title text="Registro" position='text-center'/>
                <form onSubmit={handleSubmit} className="p-3 w-full bg-zinc-300 rounded-lg md:grid md:grid-cols-2">
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
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="col-span-2 mt-4">
                        <FormButton text="Registrarse"/>
                        {Array.isArray(error) && error.map((err, index) => (
                            <div key={index} className="text-red-500 text-center mt-2">{err}</div>
                        ))}
                        <div className="justify-center text-center">
                            <span><Text text="Al registrarte, aceptas los"/></span> 
                            <span><Link text=" términos y condiciones" href="/terms"/></span>
                        </div>
                    </div>

                </form>
                <div className="p-5 w-full h-auto bg-zinc-300 rounded-lg">
                    <div className="justify-center text-center">
                        <span><Text text="¿Ya tienes una cuenta?"/></span> 
                        <span><Link text=" Inicia sesión" href="/login"/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
