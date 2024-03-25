import React from 'react';
import PropTypes from 'prop-types';
const Button = ({ text, onClick }) => {
    return (
        <button className="w-auto h-9 bg-[#7f9fb5] bg-opacity-40 rounded-lg flex flex-col justify-center items-center hover:bg-[#7f9fb5b4] active:bg-[#95b8d0]" onClick={onClick}>
            <span className="text-white text-base font-medium font-[IBM Plex Sans]">{text}</span>
        </button>
    );
};

export default Button;