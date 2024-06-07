import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ label, options, value, required, onChange }) => {
    return (
        <div className="p-4">
            {label && (
                <p className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</p>
            )}
            <div className="flex flex-col gap-2 p-2">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name={label}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            required={required}
                            className='h-6 w-6'
                        />
                        <span className="text-medium text-slate-700">{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

RadioGroup.propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
        })
    ).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired
};

export default RadioGroup;
