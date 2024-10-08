import {useState, useEffect} from "react";
import Header from "../components/general/Header";
import Title from "../components/general/Title";
import Footer from "../components/general/Footer";
import Profile from "../components/general/Profile";
import { ToastContainer } from "react-toastify";
import MapComponent from '../components/map/MapComponent';

const Map = () => {
    const [userLocation, setUserLocation] = useState(null);
    const currentUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

    const [activeProfile, setActiveProfile] = useState(false);

    const handleActiveProfile = () => {
        setActiveProfile(!activeProfile);
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div className='bg-[#fbfcfc] dark:bg-[#2c2c2c] flex flex-col min-h-screen'>
            <Header handleActiveProfile={handleActiveProfile} activeProfile={activeProfile}/>
            <ToastContainer />
            <main className="pt-24 flex-grow">
                <Title text="Clínicas" position="ml-5" />
                <div className="flex">
                    <div className="w-full lg:w-9/12 px-3 lg:pl-5 mb-4 lg:mb-0">
                        {userLocation ? (
                            <MapComponent userLocation={userLocation} />
                        ) : ( 
                            <p>Loading...</p>
                        )}
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

export default Map;
