import React from 'react';
import Title from '../Title/Title';
import { fetchData } from '@/app/utils/funcs';
import { FaPlaneDeparture } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import Button from '../Button/Button';

const QuickPriceCheck = async () => {
    const prices = await fetchData('http://localhost:3000/api/quickPriceCheck');
    // console.log(prices)
    return (
        <section className='mt-6 md:mt-12 mx-4 md:mx-8'>
            <Title>quick price check</Title>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 md:gap-3">
                {
                    prices?.map(price =>(
                        <div className='p-6 text-slate-900 bg-yellow-400 hover:text-yellow-400 hover:bg-slate-900 flex flex-row space-x-4 items-center'>
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