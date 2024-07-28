'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Header from '../_components/header';
import Footer from '../_components/footer';

export default function Home(){
    
    const searchParams = useSearchParams();
    const firstname = searchParams.get('firstname');
    const [showModal, setshowModal] = useState(false)
          
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Header />

                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg float-right">
                    <Link className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded float-right cursor-auto"
                    href=""> 
                    Welcome {firstname}
                    </Link>
                    <br/>
                </div>
                <br/>
                <div className='w-9/12'>                    
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
                            className="bg-amber-500 hover:bg-amber-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 hover:text-black rounded"
                            href="/enroll"> Enroll Today!
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
                        <button 
                            className="bg-green-500 hover:bg-green-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded "
                            onClick={() => setshowModal(true)}
                            >
                            Create New Product
                        </button>
                    </span>
                </div> 
                <br/><br/>                
                <br/><br/>

                <Footer />
            </main>            
        </>
    );
}