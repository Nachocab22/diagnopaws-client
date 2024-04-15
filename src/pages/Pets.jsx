import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
import VerticalDivider from '../components/VerticalDivider';
import PetIcon from '../components/PetIcon';
import PetNew from '../components/PetNew';
import Profile from '../components/Profile';
import PetInfo from '../components/PetInfo';

const Pets = () => {
    const navigate = useNavigate();
    const pets = [
        {
            id: 1,
            name: 'Perro',
            species: 'Canis lupus familiaris',
            breed: 'Labrador Retriever',
            sex: 'Macho',
            birth_date: '12/05/2019',
            color: 'Marrón',
            chip : {
                number: '1234567890',
                mark_date: '12/05/2021',
                mark_position: 'Oreja izquierda',
            },
            image: 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg '
        },
        {
            id: 2,
            name: 'Gato',
            species: 'Felis catus',
            breed: 'Siamés',
            sex: 'Hembra',
            birth_date: '12/05/2019',
            color: 'Blanco',
            chip : {
                number: '789251623',
                mark_date: '12/05/2021',
                mark_position: 'Oreja derecha',
            },
            image: 'https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg'
        }
    ];

    const user = {
        name: 'Juan Pérez',
        surname: 'Sánchez',
        email: 'juan@correo.es',
        phone: '634623476',
        address : {
            street: 'Calle de la Rosa',
            flat: '3º A',
            number: '23',
            town: 'Madrid',
            province: 'Madrid'
        }
    };

    const listPets = pets.map(pet =>
        <li key={pet.id} className='flex'>
            <PetIcon name={pet.name} image={pet.image} />
        </li>
    );

    return (
        <div className='bg-[#fbfcfc] w-screen h-screen'>
            <Header />
            <main className='pt-24 h-full w-full p-5'>
                <Title text='Mascotas' position='ml-5' />
                <div className='flex'>
                    <div className='grid grid-cols-1 grid-flow-row p-5'>
                        {listPets}
                        <PetNew />
                    </div>
                    <div className='flex-col '>
                        <PetInfo pet={pets[0]} />
                    </div>
                </div>
                {/* <Profile user={user} /> */}
            </main>
            <Footer/>
        </div>
    );
};

export default Pets;