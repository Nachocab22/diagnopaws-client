import React, { useState, useEffect } from "react";
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
    const [backgroundImage, setBackgroundImage] = useState('');

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

    useEffect(() => {
        const catImages = [
            'http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg',
            'https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?cs=srgb&dl=animal-pet-cute-259803.jpg&fm=jpg',
            'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/165/76/87490163.jpg',
            'http://static2.businessinsider.com/image/5654150584307663008b4ed8/this-tech-recruiter-owns-the-most-hipster-cat-on-instagram.jpg',
            'http://www.bestpets.co/wp-content/uploads/2017/08/e38767b2d4005b865e1854c265e9ab7e.jpg',
            'https://www.gannett-cdn.com/-mm-/11b2b5c07945c902d5b5393c0acfb2b14c8d6b68/c=206-0-2398-2922&r=537&c=0-0-534-712/local/-/media/2017/11/11/Binghamton/B9330172913Z.1_20171111171413_000_G88K9007B.2-0.jpg',
            'https://images.theconversation.com/files/204986/original/file-20180206-14104-1hyhea9.jpg?ixlib=rb-1.1.0&rect=0%2C1212%2C5550%2C2775&q=45&auto=format&w=1356&h=668&fit=crop'
        ];
        const randomIndex = Math.floor(Math.random() * catImages.length);
        setBackgroundImage(catImages[randomIndex]);
    }, []);

    return (
        <div className="bg-[#fbfcfc] grid grid-flow-col md:grid-cols-2 h-screen">
            <div className="bg-zinc-300 hidden md:block flex justify-center items-center">
                <img src={backgroundImage} alt="Imagen de fondo de gato" className="object-cover bg-cover w-full h-full"/>
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
                        <div className="mt-3 justify-center text-center">
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
