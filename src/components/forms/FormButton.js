import React from 'react';
import PropTypes from 'prop-types';
const FormButton = ({ text, onClick }) => {
    return (
        <div className="flex justify-center items-center">
            <button
                type='submit'
                className="w-40 h-9 bg-slate-400 rounded-lg flex justify-center items-center hover:bg-[#28464b] active:bg-slate-500"
                onClick={onClick}
            >
                <span className="text-white text-base font-medium font-[IBM Plex Sans]">{text}</span>
            </button>
        </div>
    );
};


FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FormButton;