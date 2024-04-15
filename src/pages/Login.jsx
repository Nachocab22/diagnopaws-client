import React from "react";
import Text from '../components/Text';
import Link from '../components/Link';
import FormButton from '../components/forms/FormButton';
import Title from "../components/Title";
import FormPassword from "../components/forms/FormPassword";
import FormMail from "../components/forms/FormMail";

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con la contraseña, como enviarla a un servidor
    };

    return (
        <div className="bg-[#fbfcfc] grid grid-flow-col md:grid-cols-2 h-screen">
            <div className="bg-zinc-300 hidden md:block">
                {/* Aquí puedes añadir una imagen de fondo o cualquier otro contenido que desees */}
            </div>
            <div className="p-3 place-self-center">
                <Title text="Iniciar sesión" position="text-center"/>
                <div className="flex-auto justify-center">
                    <form onSubmit={handleSubmit} className="p-5 w-auto h-auto bg-zinc-300 rounded-lg">
                        <FormMail label="Correo electrónico" placeholder="Correo electrónico"/>
                        <FormPassword/>

                        <div className="mt-5">
                            <FormButton text="Iniciar sesión" onClick={() => alert('Se ha pulsado el botón')}/>
                        </div>
                        <div className="mt-2 justify-center text-center">
                            <span><Text text="¿No tienes cuenta?"/></span> 
                            <span><Link text=" Regístrate aqui" href="/register"/></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; 
