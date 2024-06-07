import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/general/Button';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className='w-screen h-screen bg-zinc-300 '>
            <div className='p-8 fixed top-0 right-0 grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Button text='Iniciar sesión' size='w-40 h-12' color='bg-[#7f9fb5] hover:bg-[#7f9fb5b4] active:bg-[#95b8d0]' onClick={handleLoginClick}/>
                <Button text='Registrarse' size='w-40 h-12' color='bg-[#7f9fb5] hover:bg-[#7f9fb5b4] active:bg-[#95b8d0]' onClick={handleRegisterClick}/>
            </div>
        </div>
    );
};

export default Home;