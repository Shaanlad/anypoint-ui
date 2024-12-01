
'use client'
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { FormEvent } from 'react';
import Header from '../_components/header';
import Footer from '../_components/footer';
import Payment from '../_components/payment';
import { useSearchParams } from 'next/navigation';

const BASE_URL = 'http://localhost:3030';

export default function Checkout(){
// const Checkout: React.FC = () => {    

    const searchParams = useSearchParams();
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');
    const phone = searchParams.get('phone');
    const email = searchParams.get('email');

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Header />
                <br/><br/>
                {/* <div className='text-black fixed left-0 top-0 flex w-full justify-centre pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:p-4 '>
                    <span >
                        <p className='text-base font-semibold text-4xl'>
                            Please Enter Card Details Carefully
                        </p>                    
                    </span>
                </div> */}
                <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm w-full flex relative">
                    <div className='text-black w-3/4'>
                        <p className='absolute inset-x-0 top-0 w-1/2 text-xl text-center decoration-sky-600 hover:decoration-blue-400 my-6 mx-3 bg-amber-300 text-black items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-white-700 hover:border-blue-500 rounded'>
                                    Order Details
                        </p>

                        <span className='top-0'>
                            <p className='text-black text-xl text-left px-4'> {firstName} {lastName} </p>
                            <p className='text-black text-xl text-left px-4'> {phone} </p>
                            <p className='text-black text-xl text-left px-4'> {email} </p>
                            {/* <p className='text-black text-xl text-left px-4'> Test Test Test Test Test Test Test Test </p>
                            <p className='text-black text-xl text-left px-4'> Test Test Test Test Test Test Test Test </p>
                            <p className='text-black text-xl text-left px-4'> Test Test Test Test Test Test Test Test </p>
                            <p className='text-black text-xl text-left px-4'> Test Test Test Test Test Test Test Test </p> */}
                        </span>

                    </div>  
                    <div className='text-black w-2/4'>
                    <br/>
                        {/* Stripe Payment Block         */}
                        <Payment />
                    </div>               
                </div>            
                <br/>
            <Footer />
            </main>
        </>
    )
};
// export default Checkout;