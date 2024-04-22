import React from "react";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";
import NewPetForm from "../components/NewPetForm";
import Profile from "../components/Profile";

const NewPet = () => {

    const [activeProfile, setActiveProfile] = useState(false);

    const user = {
        name: 'Juan Pérez',
        surname: 'Sánchez',
        email: 'juan@correo.es',
        phone: '634623476',
        address : {
            street: 'Calle de la Rosa',
            flat: '3º A',
            number: '23',
            town: 'Madrid',
            province: 'Madrid'
        }
    };

    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    return (
        <div className='bg-[#fbfcfc] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <main className="pt-24 pb-14 flex-grow">
                <Title text="Nueva mascota" position="ml-5" />
                <div className="flex">
                    <div className="w-full sm:w-9/12 pl-5">
                        <NewPetForm/>
                    </div>
                    {activeProfile && <div>
                        <Profile user={user}/>
                    </div>}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NewPet;