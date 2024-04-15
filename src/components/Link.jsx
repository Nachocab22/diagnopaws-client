import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ text, color = "blue", href = "#" }) => {
    const classColor = `text-${color}`;
    return (
            <a href={href} 
            className={`${classColor} text-center text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight`}
            
            >{text}</a>
    );
};

Link.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    href: PropTypes.string
};

export default Link;