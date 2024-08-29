import React, { useEffect, useState } from 'react';
import axios from "../../axiosConfig";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Header from '../../components/general/Header';
import Title from '../../components/general/Title';
import Footer from '../../components/general/Footer';
import Profile from '../../components/general/Profile';
import PetInfo from '../../components/pet/PetInfo';
import PetList from '../../components/pet/PetList';
import Button from '../../components/admin/Button';

const Pets = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const [selectedPetId, setSelectedPetId] = useState(null);
    const [activeProfile, setActiveProfile] = useState(false);
    const [pets, setPets] = useState([]);
    const [error, useError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const petResponse = await axios.get(`/user/pets`);
                if(petResponse.status === 401){
                    toast.error('No tienes permisos para ver esta página', {theme: "colored", autoClose: 3000});
                    setTimeout(() => {
                        navigate('/login');
                    }, 3000);
                };
                setPets(petResponse.data.pets);
            } catch (error) {
                console.error('Error fetching pets', error);
            }
        };
        fetchPets();
    }, [navigate]);
    
    const handleSelectedPet = (id) => {
        if (id !== selectedPetId) {
            setSelectedPetId(id);
        }
    };
    
    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    const petItems = pets.map(pet => ({
        ...pet,
        isSelected: selectedPetId === pet.id,
    }));

    const selectedPet = selectedPetId ? pets.find(pet => pet.id == selectedPetId) : null;

    return (
        <div className='bg-[#fbfcfc] dark:bg-[#2C2C2C] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <ToastContainer/>
            <main className='h-full p-5 pt-24 flex-grow'>
                <Title text='Mascotas' position='ml-5'/>
                <div className='flex flex-col md:flex-row'>
                    <div className='ml-5 h-auto w-auto'>
                        <PetList pets={petItems} onPetClick={handleSelectedPet}/>
                    </div>
                    <div className={`relative -top-[45px] md:-top-0 md:ml-6 md:-left-[70px] w-full md:w-3/5`}>
                        {selectedPet && <PetInfo pet={selectedPet} />}
                    </div>
                </div>
                {activeProfile &&
                    <div className='w-2/5 flex-none'>
                        <Profile user={user} />
                    </div>
                }
            </main>
            <Footer/>
        </div>
    );
};

export default Pets;