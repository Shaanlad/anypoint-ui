
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FormEvent } from 'react';
import Header from '../_components/header';
import Footer from '../_components/footer';
import Payment from '../_components/payment';

const BASE_URL = 'http://localhost:3030';

export default function Checkout(){

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

                <Payment />
                <br/>
                <Footer />
                </main>
                
        </>
    )
}