import React from "react";
import PropTypes from "prop-types";
import PetIcon from "./PetIcon";
import PetNew from "./PetNew";

const PetList = ({ pets, onPetClick }) => {
    return (
        <ul className="flex md:block">
            {pets.map(pet => (
                <li key={pet.id}>
                    <PetIcon 
                        name={pet.name} 
                        image={pet.image}
                        isSelected={pet.isSelected}
                        onClick={() => onPetClick(pet.id)}
                    />
                </li>
            ))}
            <li className="-mt-5">
                <PetNew />
            </li>
        </ul>
    );
};

PetList.propTypes = {
    pets: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default PetList;
