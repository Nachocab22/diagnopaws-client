import React from "react";
import PropTypes from "prop-types";
const TextField = ({ label, placeholder }) => {
    return (
        <div className="p-3 flex-col justify-start items-start gap-0.5 inline-flex">
            <label className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <input type="text" className="self-stretch h-12 p-3 bg-neutral-50 rounded flex-col justify-start items-start gap-2.5 flex" placeholder={placeholder} />
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default TextField;