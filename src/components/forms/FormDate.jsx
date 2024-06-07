import React from "react";

const FormDate = ({ label, value, onChange, required }) => {
    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <div className="relative w-full">
                <input type="date" value={value} onChange={onChange} required={required} className="w-full h-12 p-3 bg-neutral-50 rounded flex-col justify-start items-start gap-2.5 flex" />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>

                </div>
            </div>
        </div>
    );
};

export default FormDate;