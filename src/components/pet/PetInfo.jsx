import React from "react";
import PropTypes from "prop-types";
import Title from "../general/Title";
import InfoField from "./InfoField";

const PetInfo = ({ pet }) => {

    return (
        <div>
            <div className="flex h-full w-full bg-[#7F9FB5] rounded-2xl gid grid-cols-3">
                <div className="">
                    <Title text="Información" position="text-center" color="white"/>
                    <article className="w-auto h-auto px-3 gap-3">
                        <InfoField label="Nombre" value={pet.name} color="white"/>
                        <InfoField label="Especie" value={pet.breed.species.name} color="white"/>
                        <InfoField label="Raza" value={pet.breed.name} color="white"/>
                        <InfoField label="Sexo" value={pet.sex} color="white"/>
                        <InfoField label="Fecha de nacimiento" value={pet.birth_date} color="white"/>
                        <InfoField label="Color" value={pet.color} color="white"/>
                    </article>

                    <Title text="Marcado" position="text-center" color="white"/>
                    <article className="w-auto h-auto px-3 pb-3 gap-3">
                        <InfoField label="Numero" value={pet.chip.number} color="white"/>
                        <InfoField label="Fecha de marcado" value={pet.chip.marking_date} color="white"/>
                        <InfoField label="Posición" value={pet.chip.position} color="white"/>
                    </article>
                </div>
                <div className="col-span-2">

                </div>

            </div>
        </div>
    );

};

PetInfo.propTypes = {
    pet: PropTypes.object.isRequired,
};

export default PetInfo;