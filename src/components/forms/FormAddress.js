import React from "react";
import { useState } from "react";
import Button from "../Button";
import FormText from "./FormText";
import FormSelect from "./FormSelect";
const FormAddress = ({ label, placeholder}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [town, setTown] = useState("");
    const [province, setProvince] = useState("");
    const [community, setCommunity] = useState("");
    const [address, setAddress] = useState("");

    const handleOpenModal = () => setIsModalOpen(true);

    const handleCloseModal = () => setIsModalOpen(false);

    const handleSubmitAddress = () => {
        const fullAddress = `${street} ${number}, ${town}, ${province}, ${community}`;
        setAddress(fullAddress);
        handleCloseModal();
    };

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <input 
                type="text" 
                className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5 flex-1" 
                value={address}
                placeholder={placeholder} 
                readOnly
                onClick={handleOpenModal}
            />

            {isModalOpen && (
                <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white max-w-md mx-auto my-auto">

                        <h3 className="text-center mb-4">Introduce tu dirección</h3>

                        <FormText label="Calle" placeholder="Calle" value={street} onChange={(e) => setStreet(e.target.value)} />
                        <FormText label="Número" placeholder="Número" value={number} onChange={(e) => setNumber(e.target.value)} />
                        <FormSelect label="Ciudad" options={["Seleccione una ciudad", "Jerez", "Madrid", "Barcelona", "Sevilla", "Cádiz"]} value={town} onChange={(e) => setTown(e.target.value)}/>
                        <FormSelect label="Provincia" options={["Seleccione una provincia", "Cádiz", "Sevilla", "Málaga", "Huelva", "Granada"]} value={province} onChange={(e) => setProvince(e.target.value)} />
                        <FormSelect label="Comunidad Autónoma" options={["Seleccione una comunidad", "Andalucía", "Cataluña", "Madrid", "Comunidad Valenciana", "Galicia"]} value={community} onChange={(e) => setCommunity(e.target.value)}/>

                        <div className="flex justify-end mt-4">
                            <Button text="Guardar Dirección" size='w-40 h-9' onClick={handleSubmitAddress} />
                        </div>
                        {/* <Button text="Cerrar" size="w-40 h-9" position="absolute right-3" onClick={handleCloseModal}/> */}
                        <button className="text-red-600 absolute right-2 top-2" onClick={handleCloseModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormAddress;