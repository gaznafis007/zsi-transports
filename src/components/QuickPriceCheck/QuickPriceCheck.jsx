import React from 'react';
import Title from '../Title/Title';
import { fetchData } from '@/utils/funcs';
import { FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import Button from '../Button/Button';


const QuickPriceCheck = async () => {
    const prices = await fetchData('https://zsi-transports.vercel.app/api/quickPriceCheck');
    // const prices = [
    //     {
    //         id: 1,
    //         title: 'hourly rate',
    //         minPrice: 60,
    //     },
    //     {
    //         id: 2,
    //         title: 'lga airport',
    //         minPrice: 80,
    //     },
    //     {
    //         id: 3,
    //         title: 'jfk airport',
    //         minPrice: 90,
    //     },
    //     {
    //         id: 4,
    //         title: 'ewr airport',
    //         minPrice: 100,
    //     },
    // ]
    // console.log(prices)
    return (
        <section className='mt-6 md:mt-12 mx-4 md:mx-8'>
            <Title>quick price check</Title>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 md:gap-3">
                {
                    prices && (
                        prices?.map(price =>(
                            <div key={price?.id} className='p-6 text-slate-900 bg-yellow-400 hover:text-yellow-400 hover:bg-slate-900 flex flex-row space-x-4 items-center'>
                                <div>
                                    {
                                        prices[0].id == price?.id ? <AiOutlineClockCircle size={36}/> : <FaPlaneDeparture size={36}/>
                                    }
                                </div>
                                <div>
                                    <h3 className='text-2xl uppercase'> {price?.title}</h3>
                                    <p className="mt-2">Starts from ${price?.minPrice}</p>
                                </div>
                            </div>
                        ))
                    )
                    
                }
            </div>
            <div className='mt-8 md:mt-16'>
                <h2 className="text-6xl text-center uppercase">RPC limo nationwide</h2>
                <p className="mt-4 text-2xl text-center">
                Headquarters in New York serving multiple cities.
                </p>
                <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">
                    <Button>View Price and Book a Ride</Button>
                    <Button>View Price and Book a Ride</Button>
                </div>
            </div>
        </section>
    );
};

export default QuickPriceCheck;