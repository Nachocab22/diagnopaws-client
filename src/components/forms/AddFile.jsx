import React from "react";
import PropTypes from "prop-types";

const AddFile = ({ label, onChange = () => {} }) => {
    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label className="content-stretch text-slate-700 dark:text-zinc-200 font-bold font-['IBM Plex Sans'] leading-normal tracking-tight">{label}</label>
            <input
                type="file"
                onChange={onChange}
                className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5"
            />
        </div>
    );
}

export default AddFile;
AddFile.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func
};
