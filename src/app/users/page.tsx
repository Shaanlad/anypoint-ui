
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { FormEvent } from 'react';
import Header from '../_components/header';
import Footer from '../_components/footer';

export default function Home(){
    
    const BASE_URL = 'http://localhost:3030';
    // let users: any[] = [];

    const [users, setUsers] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [showModal, setshowModal] = useState(false)
    const [error, setError] = useState(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
 
    useEffect(() => {
    fetch(`${BASE_URL}/auth/`)
        .then((res) => res.json())
        .then((data) => {
        setUsers(data)
        setLoading(false)
    })
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
          const response = await  fetch(`${BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                firstname: firstName, 
                lastname: lastName, 
                email: email,
                password: password,
                isAdmin: isAdmin }),
          });
          console.log('Form submitted >> ', response);
          if(response.status == 201) {
            console.log('Item inserted');
            setshowModal(false);
          } else {
            console.log('Error Encountered. Status ! 200');
          }      
        } catch (error) {
          console.log('Error inserting item. Please try again.');
        } finally {
            setLoading(false);
        }
    };

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
                    <span className='float-left'>
                        <button 
                            className="bg-green-500 hover:bg-green-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded "
                            onClick={() => setshowModal(true)}
                            >
                            Create New User
                        </button>
                    </span>
                </div> 
                <br/><br/><br/><br/>

                { showModal ? (
                    <>
                        {/* <Modal /> */}
                        <div className='text-black fixed left-0 top-0 flex justify-centre border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg lg:rounded-xl'>
                            
                            <div className="relative flex font-mono text-left">
                                <form onSubmit={handleSubmit}>
                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700"> 
                                    <p> First Name </p> 
                                    <input 
                                        type="text" 
                                        className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}        
                                    />          
                                    </span>          
                                    </div> <br/>

                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700"> 
                                    <p> Last Name </p> 
                                    <input 
                                        className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />  
                                    </span>
                                    </div> <br/>

                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700"> 
                                    <p> Email </p> 
                                    <input 
                                        type="email" 
                                        className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />  
                                    </span>
                                    </div> <br/>

                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700"> 
                                    <p> Password </p> 
                                    <input 
                                        type="password" 
                                        className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />  
                                    </span>
                                    </div> <br/>

                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700 flex"> 
                                    <p> Is Admin? </p> &nbsp;
                                    <input 
                                        type="checkbox" 
                                        className="" 
                                        value={isAdmin}
                                        onChange={(e) => setIsAdmin(e.target.value)}
                                    />  
                                    </span>
                                    </div> <br/>

                                    {/* <button 
                                    className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                                    onClick={() => setshowModal(false)}
                                    >
                                    Close
                                    </button> &nbsp;&nbsp; */}
                                    <button 
                                    className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                                    >
                                    Submit
                                    </button>
                                </form>
                            </div>
                        </div>  
                    </>
                    ) : null }
                <br/><br/>

                <div className="z-10 items-center justify-between font-mono text-sm w-6/12"> 
                    <ul role="list" className="p-6 divide-y divide-slate-300 ">
                    {users && users.map((item: any, index: number) => (
                        <li key={index} className="flex py-4 first:pt-0 last:pb-0 hover:bg-amber-300">
                            <span className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-red-500">
                                    Name - {item.firstname} {item.lastname}
                                </p>
                                <p className="text-sm text-slate-500 truncate">
                                    Email - {item.email}
                                </p>
                                {item.isAdmin ? 
                                <p className="text-sm font-medium text-slate-900">
                                    Admin - {'⭐️'}
                                </p> : null }
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