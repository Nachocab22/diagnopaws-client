import React, { useEffect, useState } from 'react';
import axios from "../../axiosConfig";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Header from '../../components/general/Header';
import Title from '../../components/general/Title';
import Footer from '../../components/general/Footer';
import Profile from '../../components/general/Profile';
import AddButton from '../../components/admin/AddButton';
import SearchBar from '../../components/admin/SearchBar';
import PetList from '../../components/admin/PetList';
import UserList from '../../components/admin/UserList';
import VaccineList from '../../components/admin/VaccineList';

const Admin = () => {
    const navigate = useNavigate();
    const currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    currentUser.role.includes('owner') && navigate('/pets');
    const [activeProfile, setActiveProfile] = useState(false);
    const [search, setSearch] = useState('');

    const [pets, setPets] = useState([]);
    const [users, setUsers] = useState([]);
    const [vaccines, setVaccines] = useState([]);

    const [selectedButton, setSelectedButton] = useState('Mascotas');

    useEffect(() => {
        const loadAllPets = async () => {
            try {
                const response = await axios.get(`/pets`);
                if(response.status === 200){
                    setPets(response.data.pets);
                } else {
                    console.error('Error fetching pets', response);
                }
            } catch (error) {
                console.error('Error fetching pets', error);
            }
        };

        const loadAllUsers = async () => {
            try {
                const response = await axios.get(`/users`);
                if(response.status === 200){
                    setUsers(response.data.users.filter(user => !user.role.includes('admin')));
                } else {
                    console.error('Error fetching users', response);
                }
            } catch (error) {
                console.error('Error fetching users', error);
            }
        }

        const loadAllVaccines = async () => {
            try {
                const response = await axios.get(`/vaccines`);
                if(response.status === 200){
                    setVaccines(response.data.vaccines);
                } else {
                    console.error('Error fetching vaccines', response);
                }
            } catch (error) {
                console.error('Error fetching vaccines', error);
            }
        }

        loadAllPets();
        loadAllUsers();
        loadAllVaccines();
    }, []);

    const handlePetSearch = async (searchTerm) => {
        try {
            const response = await axios.get(`/pets/search/${searchTerm}`);
            if(response.status === 200){
                setPets(response.data.pets);
            } else {
                console.error('Error searching pets', response);
            }
        } catch (error) {
            console.error('Error searching pets', error);
        }
    };

    const handleUserSearch = async (searchTerm) => {
        try {
            const response = await axios.get(`/users/search/${searchTerm}`);
            if(response.status === 200){
                setUsers(response.data.users);
            } else {
                console.error('Error searching users', response);
            }
        } catch (error) {
            console.error('Error searching users', error);
        }
    }

    const handleVaccineSearch = async (searchTerm) => {
        try {
            const response = await axios.get(`/vaccines/search/${searchTerm}`);
            if(response.status === 200){
                setVaccines(response.data.vaccines);
            } else {
                console.error('Error searching vaccines', response);
            }
        } catch (error) {
            console.error('Error searching vaccines', error);
        }
    }

    const handleDeletePet = async (pet) => {
        try {
            const response = await axios.delete(`/pets/${pet.id}`);
            if(response.status === 200){
                setPets(pets.filter(p => p.id !== pet.id));
                toast.success('Mascota eliminada correctamente', {theme: "colored", autoClose: 3000});
            } else {
                console.error('Error deleting pet', response);
                toast.error('Error eliminando mascota');
            }
        } catch (error) {
            console.error('Error deleting pet', error);
            toast.error('Error eliminando mascota');
        }
    }

    const handleDeleteUser = async (user) => {
        try {
            const response = await axios.delete(`/users/${user.id}`);
            if(response.status === 200){
                setUsers(users.filter(u => u.id !== user.id));
                toast.success('Usuario eliminado correctamente', {theme: "colored", autoClose: 3000});
            } else {
                console.error('Error deleting user', response);
                toast.error('Error eliminando usuario');
            }
        } catch (error) {
            console.error('Error deleting user', error);
            toast.error('Error eliminando usuario');
        }
    }

    const handleDeleteVaccine = async (vaccine) => {
        try {
            const response = await axios.delete(`/vaccines/${vaccine.id}`);
            if(response.status === 200){
                setVaccines(vaccines.filter(v => v.id !== vaccine.id));
                toast.success('Vacuna eliminada correctamente', {theme: "colored", autoClose: 3000});
            } else {
                console.error('Error deleting vaccine', response);
                toast.error('Error eliminando vacuna');
            }
        } catch (error) {
            console.error('Error deleting vaccine', error);
            toast.error('Error eliminando vacuna');
        }
    }
    
    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <div className='bg-[#fbfcfc] dark:bg-[#2c2c2c] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <ToastContainer/>
            <main className='h-full p-5 pt-24 flex-grow'>
                {currentUser.role.includes('admin') && <Title text='Administrador' position='ml-5'/>}
                {currentUser.role.includes('vet') && <Title text='Veterinario' position='ml-5'/>}

                <div className='flex pb-3 gap-5 justify-center md:justify-start md:pl-14 items-center'>
                    <button className={`p-3 w-32 h-10 ${selectedButton === 'Mascotas' ? 'bg-[#F39C12]' : 'bg-zinc-300 dark:bg-[#8c8c8c] hover:bg-zinc-400 active:bg-zinc-200'}   rounded-3xl flex justify-center items-center`} onClick={() => handleButtonClick('Mascotas')}>
                        <span className={`text-black dark:text-white text-xl font-['Kefa']`}>Mascotas</span>
                    </button>
                    <button className={`p-3 w-32 h-10 ${selectedButton === 'Usuarios' ? 'bg-[#F39C12]' : 'bg-zinc-300 dark:bg-[#8c8c8c] hover:bg-zinc-400 active:bg-zinc-200'}   rounded-3xl flex justify-center items-center`} onClick={() => handleButtonClick('Usuarios')}>
                        <span className={`text-black dark:text-white text-xl font-['Kefa']`}>Usuarios</span>
                    </button>
                    {currentUser.role.includes('admin') && 
                        <button className={`p-3 w-34 h-10 ${selectedButton === 'Vacunas' ? 'bg-[#F39C12]' : 'bg-zinc-300 dark:bg-[#8c8c8c] hover:bg-zinc-400 active:bg-zinc-200'}   rounded-3xl flex justify-center items-center`} onClick={() => handleButtonClick('Vacunas')}>
                            <span className={`text-black dark:text-white text-xl font-['Kefa']`}>Medicamentos</span>
                        </button>
                    }
                </div>

                {selectedButton === 'Mascotas' && 
                    <div className='grid grid-flow-row grid-cols-1 min-h-full p-5 gap-5 rounded-xl bg-[#7F9FB5] dark:bg-[#3a4a5b] justify-center items-center md:w-9/12'>
                        <div className='flex gap-3 max-w-full'>
                            <div className='flex-grow max-w-full'>
                                <SearchBar value={search} onChange={setSearch} submit={handlePetSearch}/>
                            </div>
                            <AddButton route='/manager/new-pet'/>
                        </div>
                        <PetList pets={pets} onDelete={handleDeletePet}/>
                    </div>
                }

                {selectedButton === 'Usuarios' && 
                    <div className='grid grid-flow-row grid-cols-1 min-h-full p-5 gap-5 rounded-xl bg-[#7F9FB5] dark:bg-[#3a4a5b]  justify-center items-center md:w-9/12'>
                        <div className='flex gap-3 max-w-full'>
                            <div className='flex-grow max-w-full'>
                                <SearchBar value={search} onChange={setSearch} submit={handleUserSearch}/>
                            </div>
                            <AddButton route='/manager/new-user'/>
                        </div>
                        <UserList users={users} onDelete={handleDeleteUser}/>
                    </div>
                }

                {selectedButton === 'Vacunas' && 
                    <div className='grid grid-flow-row grid-cols-1 min-h-full p-5 gap-5 rounded-xl bg-[#7F9FB5] dark:bg-[#3a4a5b]  justify-center items-center md:w-9/12'>
                        <div className='flex gap-3 max-w-full'>
                            <div className='flex-grow max-w-full'>
                                <SearchBar value={search} onChange={setSearch} submit={handleVaccineSearch}/>
                            </div>
                            <AddButton route='/manager/new-vaccine'/>
                        </div>
                        <VaccineList vaccines={vaccines} onDelete={handleDeleteVaccine}/>
                    </div>
                }

                {activeProfile &&
                    <div className='w-2/5 flex-none'>
                        <Profile user={currentUser} />
                    </div>
                }
            </main>
            <Footer/>
        </div>
    );
};

export default Admin;