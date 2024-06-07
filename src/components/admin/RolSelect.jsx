import React from 'react';

const RolSelect = ({ user, value, onRoleChange }) => {

    const options = [
        { value: 'admin', label: 'Administrador' },
        { value: 'vet', label: 'Veterinario' },
        { value: 'owner', label: 'Dueño' }
    ];

    return (
        <div className="p-2 justify-start items-start gap-0.5">
            <div className="relative w-full">
                <select 
                    className="appearance-none w-36 h-10 text-sm p-3 bg-[#d9d9d9] rounded-full flex-col justify-start items-start gap-2.5 flex" 
                    value={value}
                    onChange={(e) => onRoleChange(e, user)}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default RolSelect;
