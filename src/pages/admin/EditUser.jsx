import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/general/Header';
import Title from "../../components/general/Title";
import Profile from "../../components/general/Profile";
import EditUserForm from "../../components/admin/EditUserForm";
import Footer from "../../components/general/Footer";

const EditUser = () => {
    const location = useLocation();

    const currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const user = location.state?.user;

    const [activeProfile, setActiveProfile] = useState(false);

    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    return (
        <div className='bg-[#fbfcfc] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <ToastContainer />
            <main className="pt-24 pb-14 flex-grow">
                <Title text="Editar usuario" position='ml-5'/>
                <div className="flex">
                    <div className="w-full md:w-9/12 md:pl-5 px-5">
                        <EditUserForm user={user}/>
                    </div>
                    {activeProfile && <div>
                        <Profile user={currentUser}/>
                    </div>}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EditUser;
