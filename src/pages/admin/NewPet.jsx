import React, {useState} from "react";
import Header from "../../components/general/Header";
import Title from "../../components/general/Title";
import Footer from "../../components/general/Footer";
import NewPetForm from "../../components/admin/NewPetForm";
import Profile from "../../components/general/Profile";
import { ToastContainer } from "react-toastify";

const NewPet = () => {
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
                <Title text="Nueva mascota" position="ml-5" />
                <div className="flex">
                    <div className="w-full sm:w-9/12 pl-5">
                        <NewPetForm/>
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

export default NewPet;