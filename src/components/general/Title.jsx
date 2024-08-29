import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text, color, colorDark, position }) => {
    return (
        <h1 className={`w-auto h-16 mt-3 mb-1 text-${color} dark:text-${colorDark} ${position} text-5xl font-normal font-['Kefa'] z-0`}>{text}</h1>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    colorDark: PropTypes.string,
    position: PropTypes.string,
};

Title.defaultProps = {
    color: 'slate-700',
    colorDark: 'zinc-200',
    position: "text-center",
};

export default Title;