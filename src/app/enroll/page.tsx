'use client'
import Header from "../_components/header";
import Footer from "../_components/footer";
import { useState } from 'react';

const BASE_URL = 'http://localhost:3030';

export default function Enroll(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSSN] = useState('');

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <br/>
            <Header />
            <br/><br/>
            <div className="relative flex place-items-center font-mono text-center">
                <form>
                    <div className='block flex'>
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> First Name </p> 
                        <input 
                        type="text" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}     
                        />          
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Last Name </p>
                        <input 
                        type="text" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />  
                        </span>
                    </div> <br/>

                    <div className='block'>
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Address </p> 
                        <input 
                        type="text" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />  
                        </span>
                    </div> <br/>
                    <div className='block flex'>
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Phone Number </p> 
                        <input 
                        type="tel" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        />  
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Last 4 digits of SSN </p> 
                        <input 
                        type="password" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="ssn"
                            value={ssn}
                            onChange={(e) => setSSN(e.target.value)}
                            maxlength="4"
                        />  
                        </span>
                    </div> <br/>
                    <div className='block'>
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Last 4 digits of SSN </p> 
                        <input 
                        type="password" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="ssn"
                            value={ssn}
                            onChange={(e) => setSSN(e.target.value)}
                            maxlength="4"
                        />  
                        </span>
                    </div> <br/>
                    <div className='block'>
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Address </p> 
                        <input 
                        type="text" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />  
                        </span>
                    </div> <br/>

                    <button 
                        className="bg-blue-500 hover:bg-green-600 text-white font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-green-500 rounded" 
                        >
                        Submit
                    </button>
                </form>
            </div>
            <br/><br/>
            <Footer />
        </main>
    )
}