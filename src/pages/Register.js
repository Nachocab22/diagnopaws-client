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
        <div className="grid grid-cols-2 h-screen">
            <div className="bg-zinc-300">
                {/* Aquí puedes añadir una imagen de fondo o cualquier otro contenido que desees */}
            </div>
            <div className="p-3 place-self-center grid grid-cols-none grid-flow-row gap-4">
                <Title text="Registro" position='text-center'/>
                <form onSubmit={handleSubmit} className="p-3 w-auto h-auto bg-zinc-300 rounded-lg grid grid-cols-2">
                    <FormText label="Nombre" placeholder="Nombre"/>
                    <FormText label="Apellidos" placeholder="Apellidos"/>
                    <FormDate label="Fecha de nacimiento"/>
                    <FormSelect label="Género" options={["Seleccione una opción", "Hombre", "Mujer", "Otro"]}/>
                    <FormDni label="DNI" placeholder="DNI"/>
                    <FormPhone label="Teléfono" placeholder="Teléfono"/>
                    <div className="col-span-2">
                        <FormAddress label="Dirección" placeholder="Dirección"/>
                    </div>
                    <FormMail label="Correo electrónico" placeholder="Correo electrónico"/>
                    <FormPassword/>

                    <div className="col-span-2 mt-2">
                        <FormButton text="Registrarse" onClick={() => alert('Se ha registrado con éxito')}/>
                        <div className="justify-center text-center">
                            <span><Text text="Al registrarte, aceptas los"/></span> 
                            <span><Link text=" términos y condiciones" href="/terms"/></span>
                        </div>
                    </div>

                </form>
                {/* <h3 className="text-center text-slate-700 text-2xl font-normal font-['Kefa']">ó</h3> */}
                <div className="p-5 w-auto h-auto bg-zinc-300 rounded-lg">
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
