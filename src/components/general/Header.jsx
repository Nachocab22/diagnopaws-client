import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ handleActiveProfile, activeProfile }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [home, setHome] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if (user) {
            user.role.includes('owner') ? setHome('/pets') : setHome('/manager');
        }

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMapClick = () => {
        navigate('/map');
        window.location.reload();
    };

    const isHomePage = location.pathname === home;
    const isMapPage = location.pathname === '/map';

    const homeButtonColor = isHomePage ? 'text-[#F39C12]' : 'text-black dark:text-white';
    const mapButtonColor = isMapPage ? 'text-[#F39C12]' : 'text-black dark:text-white';

    return (
        <nav role="navigation" className={`bg-[#fbfcfc] dark:bg-[#2c2c2c] fixed h-24 w-full top-0 right-0 left-0 z-50 items-center ${isScrolled ? 'shadow-md dark:shadow-gray-500' : ''}`}>
            <button 
                onClick={() => navigate(home)}
                className={`h-16 w-16 p-5 mx-5 ${homeButtonColor}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
            <button 
                onClick={handleMapClick} 
                className={`h-16 w-16 p-5 mx-5 ${mapButtonColor}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                </svg>
            </button>
            
            {/*Boton de perfil*/}
            <button
                onClick={handleActiveProfile}
                className={`h-16 w-16 p-5 mx-5 absolute right-10 ${activeProfile ? 'text-[#F39C12]' : 'text-black dark:text-white'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>
        </nav>
    );
};

export default Header;
