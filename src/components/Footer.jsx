import React from "react";
import { useNavigate } from "react-router-dom";
import Link from "./Link";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="flex-none bg-slate-700 inset-x-0 bottom-0 h-14 flex items-center justify-between px-5">
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 border-none bg-transparent text-white">
                <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor" className="max-h-full">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.93 9.93 0 01-3.127 1.184 4.916 4.916 0 00-8.38 4.483 13.94 13.94 0 01-10.109-5.138 4.822 4.822 0 00-.664 2.471 4.918 4.918 0 002.181 4.092 4.903 4.903 0 01-2.224-.616c-.053 2.28 1.582 4.415 3.95 4.89a4.935 4.935 0 01-2.212.085 4.928 4.928 0 004.604 3.417 9.867 9.867 0 01-7.288 2.03 13.94 13.94 0 007.548 2.212c9.055 0 14.001-7.496 14.001-14 0-.21-.005-.42-.014-.63a9.936 9.936 0 002.457-2.548l-.047-.02z" />
                </svg>
            </a>
            <div className="flex gap-x-10 flex-shrink-0">
                <Link text="Privacidad" color='text-white'/>
                <Link text="Condiciones de uso" color='text-white'/>
            </div>
            
        </footer>
    );
};

export default Footer;