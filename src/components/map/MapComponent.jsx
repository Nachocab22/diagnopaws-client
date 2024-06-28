import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import StarRating from './StarRating';

const MapComponent = ({ userLocation }) => {
    const [clinics, setClinics] = useState([]);
    const [map, setMap] = useState(null);

    useEffect(() => {
        if (map && userLocation) {
            const service = new window.google.maps.places.PlacesService(map);

            const request = {
                location: new window.google.maps.LatLng(userLocation.lat, userLocation.lng),
                radius: '3000',
                type: ['veterinary_care'],
            };

            service.nearbySearch(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setClinics(results);
                }
            });
        }
    }, [map, userLocation]);

    const getCustomUserIcon = () => {
        if(!window?.google?.maps) return null;
        return {

            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2B4FF1" class="size-6">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                </svg>
            `),
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
        };
    };

    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-start p-5 bg-[#7F9FB5] rounded-2xl h-full lg:h-[70vh]'>
            <div className='w-full h-96 lg:w-2/3 lg:h-full'>
                <LoadScript googleMapsApiKey="AIzaSyALtpsxGLb7ErmFZPJjrCOI_XS4eW6BcR8" libraries={['places']}>
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }}
                        center={userLocation}
                        zoom={15}
                        onLoad={map => setMap(map)}
                    >
                        <MarkerF key={0} position={userLocation} title='Usuario' icon={getCustomUserIcon()}/>
                        {clinics.map(clinic => (
                            <MarkerF
                            key={clinic.place_id}
                            position={clinic.geometry.location}
                            title={clinic.name}
                            />
                            ))}
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className='mt-5 lg:mt-0 lg:ml-2 w-full lg:w-1/3 md:overflow-y-auto lg:flex-1 lg:h-full scrollbar-y-hide lg:max-h-full'>
                {clinics.map(clinic => (
                    <div key={clinic.place_id} className='bg-zinc-100 rounded-md p-3 mr-1 mt-2'>
                        <p className='text-xl font-normal font-["Kefa"]'>{clinic.name}</p>
                        <p className='text-base font-normal font-["Kefa"] pl-3'>{clinic.vicinity}</p>
                        <p className={`text-base font-['Kefa'] pl-3 ${clinic.opening_hours?.open_now ? "text-green-600" : "text-red-600"}`}>
                            {clinic.opening_hours?.open_now ? " Abierto" : " Cerrado"}
                        </p>
                        {clinic.rating ? (
                            <div className='ml-10 flex justify-start'>
                                <span className='mr-3 text-base font-normal font-["Kefa"]'>{clinic.rating}</span>
                                <StarRating rating={clinic.rating} />
                                <span className='ml-3 text-sm font-normal font-["Kefa"] text-gray-400'>({clinic.user_ratings_total})</span>
                            </div>
                        ) : (
                            <p className='ml-10 text-lg font-normal font-["Kefa"] text-gray-400'>Sin calificación</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MapComponent;
