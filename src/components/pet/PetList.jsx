import React from "react";
import PropTypes from "prop-types";
import PetIcon from "./PetIcon";
import PetNew from "./PetNew";

const PetList = ({ pets, onPetClick }) => {

    return (
        <ul className="flex md:block overflow-x-auto md:overflow-y-auto h-[215px] md:h-[400px] w-full md:w-[225px] scrollbar-x-hide md:scrollbar-y-left">
            {pets.map(pet => (
                <li key={pet.id} className="my-2">
                    <PetIcon 
                        name={pet.name} 
                        image={pet.image}
                        isSelected={pet.isSelected}
                        onClick={() => onPetClick(pet.id)}
                    />
                </li>
            ))}
            <li className="my-2">
                <PetNew />
            </li>
        </ul>
    );
};

PetList.propTypes = {
    pets: PropTypes.array.isRequired,
    onPetClick: PropTypes.func.isRequired,
}

export default PetList;
