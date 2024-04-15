import React from 'react';
import PropTypes from 'prop-types';
/**
 * @param {string} text - Texto que se mostrará en el título
 * @param {string} position - Posición del texto (usar TailwindCSS)
 */
const Title = ({ text, color, position }) => {
    return (
        <h1 className={`w-auto h-16 mt-3 mb-1 text-${color} ${position} text-5xl font-normal font-['Kefa'] z-0`}>{text}</h1>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    position: PropTypes.string,
};

Title.defaultProps = {
    color: 'slate-700',
    position: "text-center",
};

export default Title;