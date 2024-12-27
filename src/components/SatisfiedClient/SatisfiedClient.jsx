import React from 'react';
import Title from '../Title/Title';
import { fetchData } from '@/utils/funcs';
import Reviews from '../Reviews/Reviews';

const SatisfiedClient = async () => {
    const reviews = await fetchData('https://zsi-transports.vercel.app/api/reviews');
    // const reviews = [
    //     {
    //       id: 1,
    //       name: "peter rose",
    //       body: "A huge thank you to the RPC team for making our wedding day even more special. The attention to detail and professionalism of the chauffeurs were outstanding",
    //       img: "https://rpclimo.com/wp-content/uploads/2023/10/team1-150x150.jpg",
    //     },
    //     {
    //       id: 2,
    //       name: "carolina monntoya rose",
    //       body: "Impeccable service! From punctuality to the pristine condition of the vehicles, RPC Limo made our corporate event seamless and stylish. Highly recommended!",
    //       img: "https://rpclimo.com/wp-content/uploads/2023/10/team3-150x150.jpg",
    //     },
    //   ];
    return (
        <section className='mt-6 md:mt-12 mx-4 md:mx-8'>
            <Title>Our Satisfied CLient</Title>
            <p className="mt-4">At RPC Limo, our success is measured by the satisfaction of our clients. We take immense pride in building lasting relationships and delivering exceptional service that exceeds expectations. Here's what some of our satisfied clients have to say about their experiences</p>
            {
                reviews && <Reviews reviews={reviews}/>
            }
        </section>
    );
};

export default SatisfiedClient;