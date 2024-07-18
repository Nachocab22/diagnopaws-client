import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/general/Button';
import logo from '../../assets/images/logo_diagnopaws.png';
import backgroundImage from '../../assets/images/background_home.jpg';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className='w-screen h-screen'>
            <img src={backgroundImage} alt="Imagen de fondo de gato" className="object-cover bg-cover w-full h-full"/>
            <div className='fixed md:left-0 -bottom-5 left-8'>
                <img src={logo} alt="Logo de DiagnoPaws" className="object-cover pt-8 w-[500px] h-[175px]"/>
            </div>
            <div className='p-8 fixed top-0 right-0 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Button text='Iniciar sesión' size='w-40 h-12' color='bg-slate-600 hover:bg-slate-700 active:bg-slate-500 shadow-lg' onClick={handleLoginClick}/>
                <Button text='Registrarse' size='w-40 h-12' color='bg-slate-600 hover:bg-slate-700 active:bg-slate-500 shadow-lg' onClick={handleRegisterClick}/>
            </div>
        </div>
    );
};

export default Home;