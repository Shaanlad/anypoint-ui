'use client'
import Header from "../_components/header";
import Footer from "../_components/footer";
import { useState } from 'react';
import GooglePlaces from "../_components/googlePlaces";
import { useParams, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import ProductBlock from '../_components/productBlock';
import ProductCreationBlock from '../_components/productCreationBlock';
import Link from "next/link";
import { FormEvent } from 'react';
import { Suspense } from 'react'

export default function Enroll(){

    const router = useRouter();
    const [address, setAddress] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [ssn4Digits, setSSN4Digits] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [desiredSvcStartDate, setDesiredSvcStartDate] = useState(Date);
    const [cusSwitch, setCusSwitch] = useState(false);
    const [cusStdSwitch, setCusStdSwitch] = useState(false);
    const [svcStartDatePicker, setSvcStartDatePicker] = useState(false);

    // Suspense Issue for useSearchParams() - firstname was not used
    // const searchParams = useSearchParams();
    // const firstname = searchParams.get('firstname');

    const [showModal, setshowModal] = useState(false)
        
    const handleModalValueFromChildCmp = (modalValue: boolean) => {        
        console.log('Inside handleModalValueFromChildCmp >> ', modalValue)
        setshowModal(modalValue);
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

            // let today = new Date();
            // let duration = 5;
            // setDesiredSvcStartDate(today.setDate(today.getDate() + duration));
            // console.log(desiredSvcStartDate)

        } else if (selectedVal === 'Specific Date') {
            setCusSwitch(true)
            setSvcStartDatePicker(true);
        }
    }

    const validateSSN = (num: any) => {
        console.log('inside validate ssn');

        const regex = /^\d{3}-?\d{2}-?d{4}$/;
        const valid = regex.test(num)
        console.log('valid >> ', valid);
        
        if(valid) {
            console.log('valid SSN');
        } else {
            console.log('invalid SSN');
        }

    }

    const handleAddressFromChildCmp = (userAddress: string) => {
        console.log('userAddress >> ', userAddress)
    }

    const checkoutParams = useParams<{firstName: string, lastName: string}>() 
    // const handleProceedToPayment = () => {        
    //     router.push('/checkout');  
    //     `?firstName=${encodeURIComponent(firstName)&lastName=${encodeURIComponent(lastName)}`   
    // }

    const handleProceedToPayment = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/checkout'); 
    }

    return (
        <main className="w-full flex min-h-screen flex-col items-center justify-between p-24">
            <Header />

            {/* <-- Product Creation Block --> */}
            { showModal ? (                     
                    <ProductCreationBlock 
                    onProductCreationModalDisplay={handleModalValueFromChildCmp} /> 
                ) : null }
                <br/><br/>

                {/* <-- Product Selection Block -->  */}
                { showModal ? null : <ProductBlock /> }
                 <br/><br/> 

            {/* User Form Starts below  */}
            <svg className="animate-bounce w-6 h-6 ...">

            </svg>

            {/* ================== User Form Below ================== */}
            
            <div className="divide-y divide-dotted w-3/4 items-center justify-center">
                <div className="text-black">★</div>
                <div className="text-black ">★</div>
            </div>

            <br/>
            <span className="block text-sm font-medium text-slate-700 font-mono">
                <p className=""> In order to determine if your home/residence is serviceable, please enter your complete address in the box below. </p>
            </span>
            <div className="relative font-mono text-center w-1/2">
                <br/><br/>

                {/* Google Autocomplete API Code */}
                <GooglePlaces onAddressData={handleAddressFromChildCmp}/>

                <br/><br/>

                <form className="w-full items-center">
                    <br/>
                    <div className='block justify-center'>
                        <span className="block flex text-sm font-medium text-slate-700"> 
                        <label htmlFor="serviceType" className="w-1/2 mt-3"> Switching or Moving? </label> &nbsp;&nbsp;&nbsp;
                            <select 
                                name="serviceType" 
                                id="svcType" 
                                className="w-1/3 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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
                    </div> 

                    <br/ >
                    { cusSwitch ? ( 
                        <>
                            <div className='block justify-center'>
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
                            <div className='block text-black fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg lg:rounded-xl my-6'>
                                <span className="block text-sm font-medium text-slate-700">
                                <p className=""> Average 5 days to complete the process.</p> 
                                <p className=""> Your completion date will be {} </p> <br />
                                </span>
                            </div>
                        </>
                        ) : null }

                    { svcStartDatePicker ? ( 
                        <>
                            <div className='block text-black fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg lg:rounded-xl my-6'>
                                <span className="block text-sm font-medium text-slate-700 flex"> 
                                <p className="mt-3"> Desired Service Start Date </p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input 
                                type="date" 
                                className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    invalid:border-pink-500 invalid:text-pink-600
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                    name="desiredSvcStartDate"
                                    value={desiredSvcStartDate}
                                    onChange={(e) => setDesiredSvcStartDate(e.target.value)}
                                    maxLength={4}
                                />  
                                </span>
                            </div>
                        </>
                        ) : null }                    

                    <div className='block flex justify-center'>
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

                    <div className='block flex justify-center'>
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
                                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                maxLength={10}
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
                                name="ssn4Digits"
                                value={ssn4Digits}
                                onChange={(e) => setSSN4Digits(e.target.value)}
                                maxLength={4}
                                
                            />  
                        </span>
                    </div> <br/>

                    <div className='block flex justify-center w-full'>
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
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                    
                    <Link 
                        className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded "
                        href={{
                            pathname: '/checkout',
                            query: {
                                firstName, lastName, phone, email
                            },
                        }}
                        > Proceed to Make Payment
                    </Link>
                </form>
            </div>
            <br/><br/><br/><br/>

            <Footer />
        </main>
    )
    
}

// export function Searchbar() {
//     return (
//       // You could have a loading skeleton as the `fallback` too
//       <Suspense>
//         <Enroll />
//       </Suspense>
//     )
//   }