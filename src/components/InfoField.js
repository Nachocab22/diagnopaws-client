import React from "react";

const InfoField = ({ label, value, color }) => {
    return (
        <div className={'flex items-baseline justify-stretch w-full p-2'}>
            <span className={`text-lg font-['Kefa'] font-semibold text-${color}`}>{label}:</span>
            <span className={`text-base font-['Kefa'] font-normal text-${color}`}> {value}</span>
        </div>
    );
};

export default InfoField;