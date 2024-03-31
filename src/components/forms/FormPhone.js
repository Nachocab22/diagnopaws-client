import React from "react";
import PropTypes from "prop-types";
const FormPhone = ({ label, placeholder }) => {

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <input type="tel" pattern="/^[0-9]{9}$/i" className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5 flex-1" placeholder={placeholder} />
        </div>
    );
};

export default FormPhone;
