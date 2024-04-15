import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ label, options, value, onChange }) => {
    return (
        <div className="p-4">
            {label && (
                <p className="mb-2 text-lg font-semibold text-slate-700">{label}</p>
            )}
            <div className="flex flex-col gap-2">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center gap-2">
                        <input
                            type="radio"
                            name={label}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="text-sm text-slate-600">{option.label}</span>
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
