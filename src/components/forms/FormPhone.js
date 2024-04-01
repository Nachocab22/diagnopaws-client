import { useState } from "react";
const FormPhone = () => {

    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e) => {
        const {value} = e.target;
        setPhone(value);
    };

    return (
        <div className="p-2 flex-col justify-start items-start gap-0.5">
            <label htmlFor="phone" className="content-stretch text-slate-700 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">Teléfono</label>
            <input 
                id="phone" 
                type="tel" 
                value={phone}
                onChange={handlePhoneChange}
                className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5 flex-1" 
                placeholder='Teléfono'
                isRequired={false}
            />
        </div>
    );
};

export default FormPhone;
