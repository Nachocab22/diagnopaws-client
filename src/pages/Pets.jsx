import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import PetInfo from '../components/PetInfo';
import PetList from '../components/PetList';

const Pets = () => {
    const navigate = useNavigate();
    const [selectedPetId, setSelectedPetId] = useState(null);
    const [activeProfile, setActiveProfile] = useState(false);
    
    const pets = [
        {
            id: 1,
            name: 'Perro',
            species: 'Canis lupus familiaris',
            breed: 'Labrador Retriever',
            sex: 'Macho',
            birth_date: '12/05/2019',
            color: 'Marrón',
            chip : {
                number: '1234567890',
                mark_date: '12/05/2021',
                mark_position: 'Oreja izquierda',
            },
            image: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg '
        },
        {
            id: 2,
            name: 'Gato',
            species: 'Felis catus',
            breed: 'Siamés',
            sex: 'Hembra',
            birth_date: '12/05/2019',
            color: 'Blanco',
            chip : {
                number: '789251623',
                mark_date: '12/05/2021',
                mark_position: 'Oreja derecha',
            },
            image: 'https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg'
        }
        
    ];
    
    const handleSelectedPet = (id) => {
        setSelectedPetId(id);
    };
    
    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    const petItems = pets.map(pet => ({
        ...pet,
        isSelected: selectedPetId === pet.id
    }));

    const selectedPet = pets.find(pet => pet.id === selectedPetId);

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

    return (
        <div className='bg-[#fbfcfc] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <main className='h-full p-5 pt-24 flex-grow'>
                <Title text='Mascotas' position='ml-5'/>
                <div className='flex flex-col md:flex-row'>
                    <div className='grid grid-rows-1 ml-5 md:grid-cols-1'>
                        <PetList pets={petItems} onPetClick={handleSelectedPet}/>
                    </div>
                    <div className={`pl-5 w-full ${activeProfile ? 'md:w-3/5' : 'md:w-full md:ml-6'}`}>
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