
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home(){

    const [users, setUsers] = useState(null)
    const [isLoading, setLoading] = useState(true)
 
    useEffect(() => {
    fetch('http://localhost:3030/auth/')
        .then((res) => res.json())
        .then((users) => {
        setUsers(users)
        setLoading(false)
        console.log('users >> ', users)
    })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!users) return <p>No users</p>
    
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
                            href="/home"> Product Listing
                        </Link>
                    </span>
                </div> 
                <br/><br/><br/><br/>

                <div className="z-10 items-center justify-between font-mono text-sm w-6/12"> 
                    <ul role="list" className="p-6 divide-y divide-slate-300 ">
                    {users && users.map((item: any, index: number) => (
                        <li key={index} className="flex py-4 first:pt-0 last:pb-0 ">
                            <span className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-red-500">
                                    Name - {item.firstname} {item.lastname}
                                </p>
                                <p className="text-sm text-slate-500 truncate">
                                    Email - ${item.email}
                                </p>
                                <p className="text-sm font-medium text-slate-900">
                                    Admin - {item.isAdmin} ⭐️
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