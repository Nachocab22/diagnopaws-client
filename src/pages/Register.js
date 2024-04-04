import React from "react";
import Text from '../components/Text';
import Link from '../components/Link';
import FormButton from '../components/forms/FormButton';
import FormText from '../components/forms/FormText';
import Title from "../components/Title";
import FormPassword from "../components/forms/FormPassword";
import FormMail from "../components/forms/FormMail";
import FormDate from "../components/forms/FormDate";
import FormSelect from "../components/forms/FormSelect";
import FormPhone from "../components/forms/FormPhone";
import FormDni from "../components/forms/FormDni";
import FormAddress from "../components/forms/FormAddress";

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con la contraseña, como enviarla a un servidor
    };

    return (
        <div className="bg-[#fbfcfc] grid grid-flow-col md:grid-cols-2 h-screen">
            <div className="hidden md:block bg-zinc-300">
                {/* Aquí puedes añadir una imagen de fondo o cualquier otro contenido que desees */}
            </div>
            <div className="p-3 place-self-center grid grid-flow-row gap-4">
                <Title text="Registro" position='text-center'/>
                <form onSubmit={handleSubmit} className="p-3 w-full bg-zinc-300 rounded-lg md:grid md:grid-cols-2">
                    <FormText label="Nombre" placeholder="Nombre"/>
                    <FormText label="Apellidos" placeholder="Apellidos"/>
                    <FormDate label="Fecha de nacimiento"/>
                    <FormSelect label="Género" options={["Seleccione una opción", "Hombre", "Mujer", "Otro"]}/>
                    <FormDni/>
                    <FormPhone/>
                    <div className="col-span-2">
                        <FormAddress/>
                    </div>
                    <FormMail label="Correo electrónico" placeholder="Correo electrónico"/>
                    <FormPassword/>

                    <div className="col-span-2 mt-4">
                        <FormButton text="Registrarse" onClick={() => alert('Se ha registrado con éxito')}/>
                        <div className="justify-center text-center">
                            <span><Text text="Al registrarte, aceptas los"/></span> 
                            <span><Link text=" términos y condiciones" href="/terms"/></span>
                        </div>
                    </div>

                </form>
                <div className="p-5 w-full h-auto bg-zinc-300 rounded-lg">
                    <div className="justify-center text-center">
                        <span><Text text="¿Ya tienes una cuenta?"/></span> 
                        <span><Link text=" Inicia sesión" href="/login"/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
