import React, { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import FormText from "./FormText";
import FormSelect from "./FormSelect";
import Button from "../general/Button";

const FormAddress = ({ address = {}, onChange = () => {} }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [street, setStreet] = useState(address.street || "");
    const [number, setNumber] = useState(address.number || "");
    const [flat, setFlat] = useState(address.flat || "");
    const [town, setTown] = useState(address.town?.id || null);
    const [province, setProvince] = useState(address.town?.province?.id || null);
    const [fullAddress, setFullAddress] = useState("");

    const [provinces, setProvinces] = useState([]);
    const [towns, setTowns] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [filteredTowns, setFilteredTowns] = useState([]);

    useEffect(() => {
        setLoading(true);
        const fetchLocations = async () => {
            try {
                const [provinceResponse, townsResponse] = await Promise.all([
                    axios.get('/provinces'),
                    axios.get('/towns'),
                ]);
                setProvinces(provinceResponse.data.data.map(province => ({ label: province.name, value: province.id })));
                setTowns(townsResponse.data.data);
                setError(null);

                if (address.town && address.town.province) {
                    const townsInProvince = townsResponse.data.data.filter(town => town.province.id === address.town.province.id);
                    setFilteredTowns(townsInProvince.map(town => ({ label: town.name, value: town.id })));
                    const initialFullAddress = `${address.street} ${address.number}${address.flat ? ` (Piso ${address.flat})` : ''}, ${address.town.name}, ${address.town.province.name}`;
                    setFullAddress(initialFullAddress);
                }
            } catch (error) {
                console.error("Error fetching provinces and towns", error);
                setError("Error al cargar datos de provincias y ciudades");
            }
            setLoading(false);
        };
        fetchLocations();
    }, []);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleProvinceChange = async (e) => {
        const provinceId = e.target.value;
        setProvince(provinceId);

        const townsInProvince = towns.filter(town => town.province.id === parseInt(provinceId, 10));
        setFilteredTowns(townsInProvince.map(town => ({ label: town.name, value: town.id })));
        onChange({
            ...address,
            town: {
                ...address.town,
                province: { id: provinceId }
            }
        });
    };

    const handleTownChange = (e) => {
        const townId = e.target.value;
        setTown(townId);
        onChange({
            ...address,
            town: {
                ...address.town,
                id: townId
            }
        });
    };

    const handleStreetChange = (e) => {
        const newStreet = e.target.value;
        setStreet(newStreet);
        onChange({ ...address, street: newStreet });
    };

    const handleNumberChange = (e) => {
        const newNumber = e.target.value;
        setNumber(newNumber);
        onChange({ ...address, number: newNumber });
    };

    const handleFlatChange = (e) => {
        const newFlat = e.target.value;
        setFlat(newFlat);
        onChange({ ...address, flat: newFlat });
    };

    const handleSubmitAddress = (e) => {
        e.preventDefault();
        const townName = towns.find(townsInfo => townsInfo.id === parseInt(town, 10))?.name || '';
        const provinceName = provinces.find(provinceInfo => provinceInfo.value == province)?.label || '';

        const addressData = {
            street,
            number,
            flat: flat,
            town: { id: parseInt(town, 10), province: { id: parseInt(province, 10) } }
        };

        onChange(addressData);

        let formatAddress = `${street} ${number}`;
        if (flat) formatAddress += ` (Piso ${flat})`;
        if (townName && provinceName) {
            formatAddress += `, ${townName}, ${provinceName}`;
        }

        setFullAddress(formatAddress);
        handleCloseModal();
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p className="text-red-700">Ha ocurrido un error: {error}</p>;

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label htmlFor="address" className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">Dirección</label>
            <input 
                type="text" 
                className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5 flex-1" 
                value={fullAddress}
                placeholder='Dirección'
                readOnly
                onClick={handleOpenModal}
            />

            {isModalOpen && (
                <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
                    <div className="relative p-5 border w-96 shadow-lg rounded-md bg-white max-w-md mx-auto my-auto">

                        <h3 className="text-center mb-4">Introduce tu dirección</h3>

                        <FormText label="Calle" placeholder="Calle" required value={street} onChange={handleStreetChange} />
                        <FormText label="Número" placeholder="Número" required value={number} onChange={handleNumberChange} />
                        <FormText label="Piso" placeholder="Piso" value={flat} onChange={handleFlatChange} />
                        <FormSelect label="Provincia" options={provinces} defaultOption="Indique su provincia" value={province} onChange={handleProvinceChange} />
                        {province && (
                            <FormSelect label="Ciudad" options={filteredTowns} defaultOption="Indique su ciudad" value={town} onChange={handleTownChange} />
                        )}
                        <div className="flex justify-end mt-4">
                            <Button text="Guardar Dirección" size='w-50 h-9' onClick={handleSubmitAddress} />
                        </div>
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
