'use client'
import Header from "../_components/header";
import Footer from "../_components/footer";
import { ChangeEventHandler, useState } from 'react';
import { FormEvent } from 'react';

const BASE_URL = 'http://localhost:3030';

export default function Enroll(){

    const [verifyZipCode, setVerifyZipCode] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [ssn, setSSN] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [cusSwitchOrMove, setCusSwitchOrMove] = useState('');
    const [cusSwitch, setCusSwitch] = useState(false);
    const [cusStdSwitch, setCusStdSwitch] = useState(false);
    const [svcStartDatePicker, setSvcStartDatePicker] = useState(false);

    function onVerifyZipCode() {
        console.log('button clicked');
        setVerifyZipCode(true);
    }

    const onSwitchOrMoveChange = (selectedVal: string) => {
        setSvcStartDatePicker(false);
        setCusSwitch(false);

        if (selectedVal === 'Moving') {
            setSvcStartDatePicker(true);
        } else if (selectedVal === 'Switching') { 
            setCusSwitch(true);
        } else if (selectedVal === 'Choose One') {
            setSvcStartDatePicker(false);
            setCusSwitch(false);
            setCusStdSwitch(false);
        }
    }

    const onSwitchChange = (selectedVal: string) => {
        setCusSwitch(false);
        setCusStdSwitch(false);

        if (selectedVal === 'Standard Switch Date' ) {
            setCusSwitch(true)
            setCusStdSwitch(true);
        } else if (selectedVal === 'Specific Date') {
            setCusSwitch(true)
            setSvcStartDatePicker(true);
        }
    }

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
            <br/>
            <Header />

            <br/><br/>
            <span className="block text-sm font-medium text-slate-700 font-mono">
                <p className=""> In order to determine if your home/residence is serviceable, </p>
                <p> please enter the zipcode of your area and click on 'Verify Zip Code' </p>                                  
            </span>
            <br></br>
            <div className="relative font-mono text-center">
                <div className='block'>                    
                    <span className="block text-sm font-medium text-slate-700 flex"> 
                    <p className="mt-3 w-1/2"> Enter Zip Code </p> 
                    <input 
                    type="text" 
                    className="w-1/2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                        name="zipCode"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        maxLength="5"
                    />  
                    </span> <br/>
                    <button
                    className="bg-blue-500 hover:bg-amber-600 text-white font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-amber-500 rounded" 
                    onClick={onVerifyZipCode}
                    >
                        Verify Zip Code
                    </button>
                </div> <br/><br/>
                
                <form>
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
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />  
                        </span>
                    </div> <br/><br/>

                    <div className='block'>
                        <span className="block flex text-sm font-medium text-slate-700"> 
                        <label htmlFor="serviceType" className="w-1/2 mt-3"> Switching or Moving? </label> &nbsp;&nbsp;&nbsp;
                            <select 
                                name="serviceType" 
                                id="svcType" 
                                className="w-1/2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                                onChange={(e) => onSwitchOrMoveChange(e.target.value)}>
                                    <option>Choose One</option>
                                    <option>Switching</option>
                                    <option>Moving</option>
                            </select>
                        </span>
                    </div> <br/>



                    { cusSwitch ? ( 
                        <>
                            <div className='block'>
                                <span className="block flex text-sm font-medium text-slate-700"> 
                                <label htmlFor="serviceType" className="w-1/2 mt-3"> When would you like to start your service? </label> &nbsp;&nbsp;&nbsp;
                                    <select 
                                        name="cusSwitch" 
                                        id="cusSwitch"
                                        className="w-1/2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                                        onChange={(e) => onSwitchChange(e.target.value)}>
                                            <option>Choose One</option>
                                            <option>Standard Switch Date</option>
                                            <option>Specific Date</option>
                                    </select>
                                </span>
                            </div>
                        </>
                    ) : null }  

                    <br/>

                    { cusStdSwitch ? ( 
                        <>
                            <div className='block text-black fixed left-0 top-0 flex w-full justify-centre border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg lg:rounded-xl my-6'>
                                <span className="block text-sm font-medium text-slate-700">
                                <p className=""> Average 5 days to complete the process </p>                                  
                                </span>
                            </div>
                        </>
                        ) : null }

                    { svcStartDatePicker ? ( 
                        <>
                            <div className='block text-black fixed left-0 top-0 flex w-full justify-centre border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg lg:rounded-xl my-6'>
                                <span className="block text-sm font-medium text-slate-700 flex"> 
                                <p className="mt-3"> Desired Service Start Date </p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input 
                                type="date" 
                                className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                    name="ssn"
                                    value={ssn}
                                    onChange={(e) => setSSN(e.target.value)}
                                    maxLength="4"
                                />  
                                </span>
                            </div>
                        </>
                        ) : null }    
                    <br/><br/>

                    <div className='block flex'>
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> First Name </p> 
                        <input 
                        type="text" 
                        className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}     
                        />          
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Last Name </p>
                        <input 
                        type="text" 
                        className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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
                            text-black" 
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            maxLength="10"
                        />  
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Last 4 digits of SSN </p> 
                        <input 
                        type="text" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="ssn"
                            value={ssn}
                            onChange={(e) => setSSN(e.target.value)}
                            maxLength="4"
                        />  
                        </span>
                    </div> <br/>

                    <div className='block flex'>
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Email Address </p> 
                        <input 
                        type="email" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />  
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="block text-sm font-medium text-slate-700"> 
                        <p> Date of Birth </p> 
                        <input 
                        type="date" 
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                            name="dateOfBirth"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        />  
                        </span>
                    </div> <br/><br/>

                    {/* <div className='block flex'>
                        <span className="block text-sm font-medium text-slate-700"> 
                            <p> Email Address </p> 
                            <input 
                            type="email" 
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />  
                            <p> Date of Birth </p> 
                            <input 
                            type="email" 
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </span>
                    </div> <br/><br/> */}

                    {/* <div className='block'>
                        <span className="block text-sm font-medium text-slate-700"> 
                            <p> Address </p> 
                            <input 
                            type="text" 
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />  
                        </span>
                    </div> <br/> */}

                    {/* <button 
                        className="bg-blue-500 hover:bg-green-600 text-white font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-green-500 rounded" 
                        >
                        Save & Continue
                    </button>
                    &nbsp;&nbsp;&nbsp; */}
                    <button 
                        className="bg-red-500 hover:bg-red-600 text-white font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded" 

                        // bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded
                        >
                        Proceed to Payment
                    </button>
                </form>
            </div>
            <br/><br/>

            <Footer />
        </main>
    )
}