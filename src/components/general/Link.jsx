import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ text, color = "text-sky-600", href = "#" }) => {
    return (
            <a href={href} 
            className={`${color} text-center text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight`}
            
            >{text}</a>
    );
};

Link.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    href: PropTypes.string
};

export default Link;