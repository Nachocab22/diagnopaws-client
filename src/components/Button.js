import React from 'react';
import PropTypes from 'prop-types';
const Button = ({text, size = 'w-32 h-10', color = 'bg-[#7f9fb5] hover:bg-[#7f9fb5b4] active:bg-[#95b8d0]', onClick = () => {}}) => {

    return (
        <button className={`p-3 ${size} ${color} rounded-lg flex flex-col justify-center items-center`} onClick={onClick}>
            <span className="text-white text-base font-medium font-[IBM Plex Sans]">{text}</span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;