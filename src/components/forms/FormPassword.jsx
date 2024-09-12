import React, { useState } from 'react';
import Link from '../general/Link';

const FormPassword = ({value, onChange, linkColor = "text-sky-600"}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={`p-2 flex-col justify-start items-start gap-0.5`}>
            <label htmlFor="password" className="content-stretch text-slate-700 dark:text-zinc-200 text-base font-normal font-['IBM Plex Sans'] leading-normal tracking-tight">Contraseña</label>
            <div className="w-full self-stretch h-12 p-3 bg-neutral-50 rounded justify-start items-start gap-2.5 flex-1 relative">
                <input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    placeholder='Contraseña'
                    className="w-full h-full bg-transparent focus:outline-none pr-12"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 focus:outline-none absolute top-0 right-0 h-full px-3 flex items-center"
                >
                    {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                      
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    )}
                </button>
            </div>
            <Link text="¿Ha olvidado su contraseña?" href="/recover-password" color={linkColor}/>
        </div>
    );
};

export default FormPassword;