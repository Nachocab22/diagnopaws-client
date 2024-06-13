import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import InfoField from "../pet/InfoField";
import Title from "./Title";
import Button from "./Button";
import LogOut from "./LogOut";

const Triangle = ({position}) => {
    return (
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" className={`w-14 h-14 absolute text-[#7F9FB5] ${position}`}>
            <path
                d="M405.5389225211667 342.2155703241949C428.59281147787243 311.9760505691493 311.07783243327606 158.53294296416888 264.52094766765106 158.08384119821835C217.96406290202606 157.63473943226782 102.69461811849742 308.8323382074957 126.19761392741668 339.5209597284918C149.70060973633596 370.2095812494879 382.48503356446093 372.4550900792405 405.5389225211667 342.2155703241949C428.59281147787243 311.9760505691493 311.07783243327606 158.53294296416888 264.52094766765106 158.08384119821835"
                fill="currentColor"
                transform="matrix(0.9925187343750003,5.551115123125783e-17,-5.551115123125783e-17,0.9925187343750003,36.200398339577816,41.033649264703854)"
                strokeWidth="0"
                stroke="hsl(340, 45%, 30%)"
            ></path>
            <defs>
                <linearGradient id="SvgjsLinearGradient1000">
                <stop stopColor="hsl(340, 45%, 50%)" offset="0"></stop>
                <stop stopColor="hsl(340, 45%, 80%)" offset="1"></stop>
                </linearGradient>
                <radialGradient id="SvgjsRadialGradient1001">
                <stop stopColor="hsl(340, 45%, 50%)" offset="0"></stop>
                <stop stopColor="hsl(340, 45%, 80%)" offset="1"></stop>
                </radialGradient>
            </defs>
        </svg>
    </div>
    );
};

const Profile = ({ user }) => {

    const navigate = useNavigate();
    const penIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>  
    );

    const handleEditUser = (user) => {
        navigate(`/manager/edit-user`, { state: { user: user } });
    };
    
    return (
        <div>
            <Triangle position="top-20 right-12"/>
            <div className="w-72 h-auto z-20 bg-[#7F9FB5] rounded-2xl absolute top-28 right-10 shadow-md shadow-gray-700 xl:shadow-none">
                <Title text="Perfil" position="text-center" color="white"/>
                <div className="w-auto h-auto px-3 gap-3">
                    <InfoField label="Nombre" value={user.name} color="white"/>
                    <InfoField label="Apellidos" value={user.surname} color="white"/>
                    <InfoField label="Género" value={user.gender.name} color="white"/>
                    <InfoField label="Correo" value={user.email} color="white"/>
                    {user.phone && <InfoField label="Teléfono" value={user.phone} color="white"/>}
                </div>
                <Title text="Dirección" position="text-center" color="white"/>
                <div className="w-auto h-auto px-3 pb-3 gap-3">
                    <InfoField label="Calle" value={user.address.street} color="white"/>
                    {user.address.flat && <InfoField label="Piso" value={user.address.flat} color="white"/>}
                    <InfoField label="Número" value={user.address.number} color="white"/>
                    <InfoField label="Ciudad" value={user.address.town.name} color="white"/>
                    <InfoField label="Provincia" value={user.address.town.province.name} color="white"/>
                </div>
                <div className="p-3 flex justify-between">
                    <Button size="h-10 w-11" color="bg-zinc-300" textColor="black" icon={penIcon} onClick={() =>  handleEditUser(user)}/>
                    <LogOut />
                </div>
            </div>
        </div>
    );
};

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.number,
        address: PropTypes.shape({
            street: PropTypes.string.isRequired,
            flat: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            town: PropTypes.string.isRequired,
            province: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default Profile;