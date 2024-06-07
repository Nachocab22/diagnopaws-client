import axios from '../../axiosConfig';
import RolSelect from './RolSelect';
import Divider from '../general/Divider';
import { useState, useEffect } from 'react';

const UserList = ({ users, onEdit, onDelete, currentUser }) => {

    const [selectedValue, setSelectedValue] = useState({});

    useEffect(() => {
        // Inicializar selectedValue con los roles actuales de los usuarios
        const initialValues = users.reduce((acc, user) => {
            acc[user.id] = user.role;
            return acc;
        }, {});
        setSelectedValue(initialValues);
    }, [users]);

    const handleRolChange = async (e, user) => {
        const newRole = e.target.value;
        try {
            const roleResponse = await axios.put(`/user/role/${user.id}`, { role: newRole });
            if (roleResponse.status === 200) {
                setSelectedValue(prevValues => ({ ...prevValues, [user.id]: newRole }));
            } else {
                console.error('Error updating role', roleResponse);
            }
        } catch (error) {
            console.error('Error updating role', error);
        }
    };

    return (
        <>
            {users.map(user => (
                <div key={user.id}>
                    <Divider />
                    <div className="flex items-center justify-between rounded-lg">
                        <span className="pl-5 text-2xl text-white font-semibold font-['Kefa']">{user.name + ' ' + user.surname}</span>
                        <div>
                            <span className="text-lg text-white font-bold font-['Kefa']">DNI: </span>
                            <span className=" text-lg text-white font-normal font-['Kefa']">{user.dni}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {currentUser.role.includes('admin') && 
                                <RolSelect 
                                    user={user} 
                                    value={selectedValue[user.id]} 
                                    onRoleChange={handleRolChange}
                                />
                            }
                            <button onClick={() => onEdit(user)} className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </button>
                            <button onClick={() => onDelete(user)} className="text-red-500">
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

export default UserList;
