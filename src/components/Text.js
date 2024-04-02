import React from 'react';
import PropTypes from 'prop-types';
const Text = ({ text, color }) => {
    return (
        <span className={`text-center text-${color} text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight`}>{text}</span>
    );
};

Text.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
};

Text.defaultProps = {
    color: 'black'
};

export default Text;