const FormSelect = ({ label, options, defaultOption, value, onChange =() => {} }) => {

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label className={`content-stretch text-slate-700 dark:text-zinc-200 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight`}>{label}</label>
            <div className="relative w-full">
                <select 
                    className="appearance-none w-full h-12 p-3 bg-neutral-50 rounded flex-col justify-start items-start gap-2.5 flex" 
                    value={value}
                    onChange={onChange}
                >
                <option key={-1} value="">{defaultOption}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default FormSelect;
