import React from 'react';
import PropTypes from 'prop-types';
const Button = ({text, color = 'bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-200', onClick = () => {}}) => {

    return (
        <button className={`p-3 w-32 h-10 bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-200 rounded-3xl flex justify-center items-center`} onClick={onClick}>
            <span className={`text-black text-xl font-['Kefa']`}>{text}</span>
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;