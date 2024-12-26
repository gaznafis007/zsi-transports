'use client'
import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
// import { useGetVehiclesQuery } from '@/redux/features/baseApi';
import Loading from '@/app/loading';
import { FaUser, FaLuggageCart } from 'react-icons/fa';
import Button from '../Button/Button';
import VehicleSlider from '../VehicleSlider/VehicleSlider';


const DiscoverFleet = () => {
    // const {data:vehicles=[], isLoading} = useGetVehiclesQuery();
    const [vehicles, setVehicles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [vehicleDetails, setVehicleDetail] = useState({});
    useEffect(() =>{
        setIsLoading(true);
        fetch('/api/vehicles')
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            setVehicles(data);
            setIsLoading(false)
        })
    },[])
    if(isLoading){
        return <Loading/>
    }
    // console.log(vehicles);
    return (
        <section className='mt-6 md:mt-12 mx-4 md:mx-8'>
            <Title>discover our fleet</Title>
            <div className="mt-6">
                <ul className='flex flex-col md:flex-row md:space-x-2 justify-center'>
                    {
                        vehicles && (
                            vehicles?.map(vehicle =>(<li onClick={() => setVehicleDetail(vehicle)} key={vehicle?.name} className={`${vehicleDetails?.id == vehicle?.id ? 'bg-slate-900 text-yellow-400' : 'bg-yellow-400 text-slate-900'} px-4 py-2 cursor-pointer`}>{vehicle?.name}</li>))
                        )
                    }
                </ul>
                {
                    vehicleDetails && (
                        <div className="p-4 bg-slate-900 text-yellow-400">
                        <div className="mb-4">
                            <VehicleSlider images={vehicleDetails?.images}/>
                        </div>
                    <h2 className="text-2xl font-bold">{vehicleDetails?.name}</h2>
                    <p className="mt-4">{vehicleDetails?.description}</p>
                    <p className="mt-4 capitalize flex flex-row space-x-4">
                        <FaUser size={24}/> <span>passenger capacity: {vehicleDetails?.passengerCapacity}</span>
                    </p>
                    <p className="mt-4 capitalize flex flex-row space-x-4">
                        <FaLuggageCart size={24}/> 
                        <span>luggage capacity: {vehicleDetails?.luggageCapacity}</span>
                    </p>
                    <h3 className="mt-6 text-3xl">Features</h3>
                    <ul className='mt-4 mb-4 space-y-2 list-disc ml-4'>
                        {
                            vehicleDetails?.features?.map((feature, idx) =>(<li key={idx}>{feature}</li>))
                        }
                    </ul>
                    <Button>Book Now Pay Later</Button>
                </div>
                    )
                }
            </div>
        </section>
    );
};

export default DiscoverFleet;