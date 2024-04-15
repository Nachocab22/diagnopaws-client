import React from 'react';
import PropTypes from 'prop-types';
const Button = ({text, size = 'w-32 h-10', color = 'bg-[#7f9fb5] hover:bg-[#7f9fb5b4] active:bg-[#95b8d0]', textColor = 'white', icon = null, onClick = () => {}}) => {

    return (
        <button className={`p-3 ${size} ${color} rounded-lg flex justify-center items-center`} onClick={onClick}>
            {icon && <span className='absolute left-5'>{icon}</span>}
            <span className={`text-${textColor} text-lg font-[IBM Plex Sans]`}>{text}</span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    icon: PropTypes.object,
    onClick: PropTypes.func,
};

export default Button;