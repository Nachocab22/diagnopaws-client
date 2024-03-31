import React from 'react';
const Link = ({ text, href }) => {
    return (
            <a href={href} className="text-sky-600 text-center text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{text}</a>
    );
};

export default Link;