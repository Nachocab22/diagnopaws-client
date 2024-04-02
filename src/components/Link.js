import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ text, color, href }) => {
    return (
            <a href={href} className={`text-${color} text-center text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight`}>{text}</a>
    );
};

Link.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    href: PropTypes.string
};

Link.defaultProps = {
    color: 'sky-600',
    href: '#'
};

export default Link;