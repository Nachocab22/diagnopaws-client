import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Title from "../general/Title";
import InfoField from "./InfoField";
import VerticalDivider from "../general/VerticalDivider";
import Divider from "../general/Divider";
import { Tooltip } from "react-tooltip";

const PetInfo = ({ pet }) => {

    const [shownVaccinations, setShownVaccinations] = useState([]);

    const warningIcon = (
        <div className='pl-1' data-tooltip-id="warning-tooltip" data-tooltip-content={`${pet.name} no se ha vacunado en la fecha prevista`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="#F8BA11"
                className="size-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
            </svg>
        </div>
    );

    useEffect(() => {
        if (pet.vaccinations) {
            const filteredVaccinations = pet.vaccinations.reduce((acc, vaccination) => {
                const vaccineName = vaccination.vaccine.name;
                const existingVaccination = acc.find(v => v.vaccine.name === vaccineName);

                if (!existingVaccination || new Date(existingVaccination.vaccination_date) < new Date(vaccination.vaccination_date)) {
                    return acc.filter(v => v.vaccine.name !== vaccineName).concat(vaccination);
                }

                return acc;
            }, []);

            setShownVaccinations(filteredVaccinations);
        }
    }, [pet.vaccinations]);

    return (
        <div className="flex flex-col md:flex-row bg-[#7F9FB5] p-4 rounded-2xl">
            <div className="flex-1 mb-5">
                <Title text="Información" position="text-left" color="white" />
                <article className="w-auto h-auto px-3 gap-3">
                    <InfoField label="Nombre" value={pet.name} color="white" />
                    <InfoField label="Especie" value={pet.breed.species.name} color="white" />
                    <InfoField label="Raza" value={pet.breed.name} color="white" />
                    <InfoField label="Sexo" value={pet.sex} color="white" />
                    <InfoField label="Fecha de nacimiento" value={moment(pet.birth_date).format('DD-MM-YYYY')} color="white" />
                    <InfoField label="Color" value={pet.color} color="white" />
                </article>

                <Title text="Chip" position="text-left" color="white" />
                <article className="w-auto h-auto px-3 pb-3 gap-3">
                    <InfoField label="Número" value={pet.chip.number} color="white" />
                    <InfoField label="Fecha de marcado" value={pet.chip.marking_date ? moment(pet.chip.marking_date).format('DD-MM-YYYY') : ''} color="white" />
                    <InfoField label="Posición" value={pet.chip.position} color="white" />
                </article>
            </div>
            <VerticalDivider />
            <Divider />
            <div className="flex-1 mt-5 md:mt-0 md:ml-10">
                <Title text="Vacunas" position="text-left" color="white" />
                {shownVaccinations.length === 0 &&
                    <h2 className="text-start text-zinc-200 text-xl font-bold font-['Kefa'] pt-5 justify-center">No hay ninguna vacuna actualmente</h2>
                }
                {shownVaccinations.map(vaccination => (
                    <article key={vaccination.id} className="w-auto h-auto px-3 pb-3 gap-3">
                        <div className="flex items-center text-start text-white text-2xl font-bold font-['Kefa']">
                            {vaccination.vaccine.name}
                            {moment(vaccination.next_vaccination_date).isBefore(moment()) && warningIcon}
                        </div>

                        <div className="pl-5">
                            <InfoField label="Fecha de vacunación" value={moment(vaccination.vaccination_date).format('DD-MM-YYYY')} color="white" />
                            <InfoField label="Próxima vacunación" value={moment(vaccination.next_vaccination_date).format('DD-MM-YYYY')} color="white" />
                        </div>
                    </article>
                ))}
            </div>
            <Tooltip id="warning-tooltip" />
        </div>
    );
};

PetInfo.propTypes = {
    pet: PropTypes.object.isRequired,
};

export default PetInfo;
