import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/general/Header';
import Title from "../../components/general/Title";
import Profile from "../../components/general/Profile";
import NewUserForm from "../../components/admin/NewUserForm";

const NewUser = () => {

    const currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    const [activeProfile, setActiveProfile] = useState(false);

    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    return (
        <div className='bg-[#fbfcfc] dark:bg-[#2c2c2c] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <ToastContainer />
            <main className="pt-24 pb-14 flex-grow">
                <Title text="Nuevo usuario" position='ml-5'/>
                <div className="flex">
                    <div className="w-full sm:w-9/12 pl-5">
                        <NewUserForm />
                    </div>
                    {activeProfile && <div>
                        <Profile user={currentUser}/>
                    </div>}
                </div>
            </main>
        </div>
    );
};

export default NewUser;
