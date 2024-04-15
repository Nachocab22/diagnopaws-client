import React from "react";
import PropTypes from "prop-types";
const FormText = ({ label, placeholder, value, onChange = () => {}}) => {

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <input type="text" 
            className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5" 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
        />
        </div>
    );
};

FormText.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default FormText;