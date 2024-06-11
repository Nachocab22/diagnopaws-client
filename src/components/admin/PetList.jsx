import React from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from '../admin/Divider';

const PetList = ({ pets, onDelete }) => {
    
    const navigate = useNavigate();

    const handleEditPet = (pet) => {
        navigate(`/manager/edit-pet`, { state: {pet} });
    };

    const handleVaccination = (pet) => {
        navigate(`/manager/vaccinations`, { state: {pet} });
    };

    return (
        <>
            {pets.map(pet => (
                <div key={pet.id}>
                    <Divider/>
                    <div className="flex items-center justify-between rounded-lg">
                        <span className="pl-5 text-2xl text-white font-semibold font-['Kefa']">{pet.name}</span>
                        <div>
                            <span className="text-xl text-white font-bold font-['Kefa']">Dueño: </span>
                            <span className=" text-lg text-white font-normal font-['Kefa']">{pet.owner.name + ' ' + pet.owner.surname}</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <button onClick={() => handleVaccination(pet)} className="stroke-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" className='size-7'>
                                <path d="M17 2C17 2.50986 17 2.76479 17.0677 3.00236C17.1049 3.13286 17.157 3.25864 17.223 3.37723C17.3431 3.59309 17.5234 3.77336 17.8839 4.13388L19.8661 6.11612C20.2266 6.47664 20.4069 6.65691 20.6228 6.77701C20.7414 6.84298 20.8671 6.89509 20.9976 6.93228C21.2352 7 21.4901 7 22 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.6931 7L6.76525 11.9278C5.70048 12.9926 5.1681 13.525 5.0412 14.163C4.98627 14.4391 4.98627 14.7234 5.0412 14.9996C5.1681 15.6376 5.70049 16.17 6.76525 17.2348C7.83001 18.2995 8.3624 18.8319 9.00037 18.9588" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 6L17 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8 18.6372L6.83054 19.4725C6.35987 19.8087 6.12454 19.9768 5.86646 19.9971C5.76637 20.005 5.66567 19.9967 5.56824 19.9724C5.31702 19.91 5.11252 19.7055 4.70352 19.2965C4.29453 18.8875 4.09003 18.683 4.02756 18.4318C4.00333 18.3343 3.995 18.2336 4.00288 18.1335C4.0232 17.8755 4.1913 17.6401 4.52749 17.1695L5.36282 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5 8L18.5 4M16 10.5L20 5.5" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
                                <path d="M4.5 19.5L2 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.4 18L13.9806 18.5806C14.2702 18.8702 14.415 19.015 14.5912 19.007C14.7675 18.999 14.8986 18.8417 15.1608 18.527L16.6 16.8M19 18C19 20.2091 17.2091 22 15 22C12.7909 22 11 20.2091 11 18C11 15.7909 12.7909 14 15 14C17.2091 14 19 15.7909 19 18Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </button>
                            <button onClick={() => handleEditPet(pet)} className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                            </button>
                            <button onClick={() => onDelete(pet)} className="text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PetList;
