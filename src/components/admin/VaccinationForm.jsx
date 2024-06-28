import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "../../axiosConfig";
import { toast, ToastContainer } from "react-toastify";

import FormSelect from "../forms/FormSelect";
import FormDate from "../forms/FormDate";
import FormButton from "../forms/FormButton";
import FormText from "../forms/FormText";
import Divider from "../admin/Divider";

const VaccinationForm = ({ pet }) => {
    const [vaccine, setVaccine] = useState('');
    const [vaccinationDate, setVaccinationDate] = useState('');
    const [nextVaccinationDate, setNextVaccinationDate] = useState('');
    const [lotNumber, setLotNumber] = useState('');
    const [vaccinations, setVaccinations] = useState(pet.vaccinations || []);
    const navigate = useNavigate();

    // JSON from the API
    const [allVaccines, setAllVaccines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchVaccines = async () => {
            try {
                const vaccinesResponse = await axios.get('/vaccines');
                setAllVaccines(vaccinesResponse.data.vaccines.map(vaccine => ({ label: vaccine.name, value: vaccine.id })));
                setError(null);
            } catch (error) {
                console.error("Error fetching vaccines", error);
                setError("Error al cargar datos de vacunas");
            }
            setLoading(false);
        };
        fetchVaccines();
    }, []);

    function compareDates(a, b) {
        return a.vaccination_date < b.vaccination_date;
    };

    const onDelete = async (vaccination) => {
        try {
            const response = await axios.delete(`/vaccinations/${vaccination.id}`);
            if (response.status === 200) {
                toast.success('Vacunación eliminada correctamente', { theme: "colored", autoClose: 3000 });

                setVaccinations(vaccinations.filter(v => v.id !== vaccination.id));
            } else {
                console.error('Error deleting vaccination', response);
                toast.error('Error eliminando vacunación');
            }
        } catch (error) {
            console.error('Error deleting vaccination', error);
            toast.error('Error eliminando vacunación');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = {
            vaccine_id: vaccine,
            vaccination_date: vaccinationDate,
            next_vaccination_date: nextVaccinationDate,
            lot_number: lotNumber,
            pet_id: pet.id
        };

        try {
            const VaccinationResponse = await axios.post(`/vaccinations`, formData);
            if (VaccinationResponse.status === 201) {
                toast.success("¡Vacunación creada correctamente!", { theme: "colored", autoClose: 2000 });

                const newVaccination = VaccinationResponse.data.vaccination;
                setVaccinations([...vaccinations, newVaccination]);

                setVaccine('');
                setVaccinationDate('');
                setNextVaccinationDate('');
                setLotNumber('');
            }
        } catch (e) {
            console.error("Error al crear la vacunación: " + e);
            setError("Error al crear la vacunación");
            setLoading(false);
        }
        setLoading(false);
    };

    return (
        <div>
            <ToastContainer />
            <div className="bg-[#7F9FB5] rounded-2xl p-3 mb-3">
                <h2 className="text-3xl text-white font-bold font-['Kefa'] text-start pl-2">Nueva vacunación</h2>
                <form onSubmit={handleSubmit}>
                    <div className="place-self-center grid gap-4 grid-cols-1 md:grid-cols-2">
                        <FormSelect label="Medicamento" value={vaccine} options={allVaccines} defaultOption="Indique el medicamento" onChange={(e) => setVaccine(e.target.value)} />
                        <FormText label="Número de lote" placeholder="Número de lote" value={lotNumber} onChange={(e) => { setLotNumber(e.target.value) }} />
                        <FormDate
                            label="Fecha de vacunación"
                            value={vaccinationDate}
                            onChange={(e) => setVaccinationDate(e.target.value)}
                            required
                        />
                        <FormDate
                            label="Fecha de próxima vacunación"
                            value={nextVaccinationDate}
                            onChange={(e) => setNextVaccinationDate(e.target.value)}
                            required
                        />
                        <div className="mt-5 w-full flex justify-center col-span-2">
                            {error && <p className="text-red-600">{error}</p>}
                            <FormButton text="Guardar" color="text-white bg-blue-700 hover:bg-blue-600 active:bg-blue-900" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="p-3 rounded-2xl place-self-center bg-[#7F9FB5]">
                <h2 className="text-3xl text-white font-bold font-['Kefa'] text-start pl-2 mb-3">Lista de Vacunaciones</h2>
                {vaccinations.sort(compareDates).map(vaccination => (
                    <div key={vaccination.id}>
                        <Divider />
                        <div className="flex items-center justify-between rounded-lg">
                            <div className="flex flex-col">
                                <span className="pl-5 text-2xl text-white font-semibold font-['Kefa']">{vaccination.vaccine.name}</span>
                                <span className="pl-5 text-lg text-white font-normal font-['Kefa']">Fabricante: {vaccination.vaccine.manufacturer}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl text-white font-bold font-['Kefa']">Fecha de vacunación: </span>
                                <span className=" text-lg text-white font-normal font-['Kefa']">{moment(vaccination.vaccination_date).format('DD-MM-YYYY')}</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl text-white font-bold font-['Kefa']">Fecha de próxima vacunación: </span>
                                <span className=" text-lg text-white font-normal font-['Kefa']">{moment(vaccination.next_vaccination_date).format('DD-MM-YYYY')}</span>
                            </div>
                            <div className="flex items-center gap-5">
                                <button onClick={() => onDelete(vaccination)} className="text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VaccinationForm;
