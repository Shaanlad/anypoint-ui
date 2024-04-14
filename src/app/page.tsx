'use client'
import Link from 'next/link';
import { FormEvent } from 'react';
import { useState, useEffect } from 'react';

export default function Home() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e : FormEvent<HTMLFormElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  // function onUserNameChange(event: any) {
  //   console.log(event.target.value);
  // }

  // function onPasswordChange(event: any) {
  //   console.log(event.target.value);
  // }

  const OnSubmit = async (
    e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Inside Submit')

      const formData = new FormData(e.currentTarget)
      console.log('formData >> ', formData);

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-sans text-sm  ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-sky-950"> 
          Welcome to Anypoint Energy&nbsp;
        </p>
      </div>
      <div className="bg-blue-500">
        <Link 
            className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            href="/redirect"> View Products
        </Link>
      </div>

      <div className="relative flex place-items-center">      
        <form onSubmit={OnSubmit}>
        <label className='block'>
          <span className="block text-sm font-medium text-slate-700"> Username </span> &nbsp;
          <input 
            type="text" 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
              name="email"
              value={formData.email}
              onChange={handleInput}          
          />
        </label> <br/>
        <label className='block'>
          <span className="block text-sm font-medium text-slate-700"> Password </span> &nbsp;
          <input 
            type="text" 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
              name="password"
              value={formData.password}
              onChange={handleInput}
          />          
        </label> <br/>
        <button 
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
          >
          Submit
        </button>
      </form>
      </div> 
    </main>
  );
 }
