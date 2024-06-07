import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import Text from '../../components/general/Text';
import Link from '../../components/general/Link';
import FormButton from '../../components/forms/FormButton';
import Title from "../../components/general/Title";
import FormPassword from "../../components/forms/FormPassword";
import FormMail from "../../components/forms/FormMail";

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const credentials = {email, password};
            await axios.get('http://localhost:8000/sanctum/csrf-cookie').then(async response => {
                const loginResponse = await axios.post('/login', credentials);
                if(loginResponse.data.user){
                    localStorage.setItem('user', JSON.stringify(loginResponse.data.user));
                    if(loginResponse.data.user.role.includes('admin') || loginResponse.data.user.role.includes('vet')){
                        navigate('/manager');
                    } else if(loginResponse.data.user.role.includes('owner')){
                        navigate('/pets');
                    } else {
                        navigate('/login');
                    }
                }
            });
        } catch (error) {
            setError('Error al iniciar sesión, verifica tus credenciales');
        }
        setLoading(false);
    };

    return (
        <div className="bg-[#fbfcfc] grid grid-flow-col md:grid-cols-2 h-screen">
            <div className="bg-zinc-300 hidden md:block">
                {/* Aquí puedes añadir una imagen de fondo o cualquier otro contenido que desees */}
            </div>
            <div className="p-3 place-self-center">
                <Title text="Iniciar sesión" position="text-center"/>
                <div className="flex-auto justify-center">
                    <form onSubmit={handleSubmit} className="p-5 w-auto h-auto bg-zinc-300 rounded-lg">
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

                        <div className="mt-5">
                            <FormButton text={loading ? "Cargando..." : "Iniciar sesión"}/>
                        </div>
                        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
                        <div className="mt-2 justify-center text-center">
                            <span><Text text="¿No tienes cuenta?"/></span>
                            <span><Link text=" Regístrate aqui" href="/register"/></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 
