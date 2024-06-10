import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/general/Header";
import Title from "../../components/general/Title";
import Footer from "../../components/general/Footer";
import Profile from "../../components/general/Profile";
import EditVaccineForm from "../../components/admin/EditVaccineForm";

const EditVaccine = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const vaccine = location.state?.vaccine;

    if(!vaccine){
        navigate('/manager');
    }

    const [activeProfile, setActiveProfile] = useState(false);

    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    return (
        <div className='bg-[#fbfcfc] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <main className="pt-24 pb-14 flex-grow">
                <Title text="Editar vacuna" position="ml-5" />
                <div className="flex">
                    <div className="w-full sm:w-9/12 pl-5">
                        <EditVaccineForm vaccine={vaccine}/>
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

export default EditVaccine;