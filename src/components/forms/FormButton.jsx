import React from 'react';
import PropTypes from 'prop-types';
const FormButton = ({ text, color = "bg-slate-400 hover:bg-[#28464b] active:bg-slate-500"}) => {
    return (
        <div className="flex items-center justify-center">
            <button
                type='submit'
                className={`w-40 h-9 rounded-lg flex justify-center items-center ${color}`}
            >
                <span className="text-white text-base font-medium font-[IBM Plex Sans]">{text}</span>
            </button>
        </div>
    );
};


FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
};

export default FormButton;