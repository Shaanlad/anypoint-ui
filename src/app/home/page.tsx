
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home(){

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
    fetch('http://localhost:3030/product/')
        .then((res) => res.json())
        .then((data) => {
        setData(data)
        setLoading(false)
        console.log('products >> ', data)
    })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>
    
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <br/>
                <Header />
                <br/><br/>

                <div className="bg-blue-500 float-right">
                    <Link 
                        className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                        href="/"> Logout
                    </Link>
                </div>
                <br/><br/>

                <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm"> 
                    <ul>
                    {data && data.map((item: any, index: number) => (
                        <li key={index} className='text-black fixed left-0 top-0 flex w-full justify-centre border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg hover:bg-zinc-800/20 lg:rounded-xl'>
                        <span>
                            <p className='text-base font-semibold'>
                                {item.name}
                            </p>
                            <p>
                                {item.description}
                            </p>
                            <p>
                                ${item.price}
                            </p>
                        </span>
                        </li> 
                        )
                    )}
                    </ul>
                </div> <br/><br/>
                <Footer />
            </main>            
        </>
    );
}