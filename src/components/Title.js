import React from 'react';
/**
 * @param {string} text - Texto que se mostrará en el título
 * @param {string} position - Posición del texto (usar TailwindCSS)
 */
const Title = ({ text, position }) => {
    return (
        <h1 className={`w-auto h-16 mb-5 ${position} text-slate-700 text-5xl font-normal font-['Kefa']`}>{text}</h1>
    );
};

export default Title;