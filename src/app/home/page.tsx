
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import Header from '../_components/header';
import Footer from '../_components/footer';

export default function Home(){

    const [products, setProducts] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
    fetch('http://localhost:3030/product/')
        .then((res) => res.json())
        .then((products) => {
        setProducts(products)
        setLoading(false)
        console.log('products >> ', products)
    })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!products) return <p>No products</p>
    
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <br/>
                <Header />
                <br/><br/>
                <div className='w-8/12'>                    
                    <span className='float-right'>
                        <Link 
                            className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded "
                            href="/"> Logout
                        </Link>
                    </span>
                    <span className='float-right'>
                        &nbsp;&nbsp;&nbsp;
                    </span>
                    <span className='float-right'>
                        <Link 
                            className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                            href="/users"> User Listing
                        </Link>
                    </span>
                    <span className='float-left'>
                        <Link 
                            className="bg-green-500 hover:bg-green-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded "
                            href="/users"> Enroll Now
                        </Link>
                    </span>
                </div> <br/><br/>

                {/* <div className="bg-blue-500 float-right">
                    <Link 
                        className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                        href="/"> Logout
                    </Link>
                </div> <br></br>
                <div className="bg-blue-500 float-right">
                    <Link 
                        className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                        href="/users"> User Listing
                    </Link>
                </div> */}
                <br/><br/>

                <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm"> 
                    <ul>
                    {products && products.map((item: any, index: number) => (
                        <li key={index} className='text-black fixed left-0 top-0 flex w-full justify-centre border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg hover:bg-amber-300 lg:rounded-xl my-6'>
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