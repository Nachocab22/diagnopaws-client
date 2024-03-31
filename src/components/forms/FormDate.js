import React from "react";

const FormDate = ({ label }) => {
    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5 inline-flex">
            <label className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <input type="date" className="w-full h-12 p-3 bg-neutral-50 rounded flex-col justify-start items-start gap-2.5 flex" />
        </div>
    );
};

export default FormDate;