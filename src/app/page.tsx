'use client'
import { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from './footer';
import Header from './header';

const BASE_URL = 'http://localhost:3030';

export default function LandingPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await  fetch(`${BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('Form submitted >> ', response);
      // Handle success response as needed
      if(response.status == 201) {
        router.push('/home');
      } else {
        console.log('Error');
      }      
    } catch (error) {
      // setError('Error submitting form. Please try again.');
      console.log('Error recvd');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">      
      <Header />

      <div className="relative flex place-items-center font-mono">
        <form onSubmit={handleSubmit}>
        <div className='block'>
          <span className="block text-sm font-medium text-slate-700"> 
          <p> Email </p> 
          <input 
            type="text" 
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
        </div> <br/>

        <div className='block'>
          <span className="block text-sm font-medium text-slate-700"> 
          <p> Password </p> 
          <input 
            type="text" 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />  
          </span>
        </div> <br/>

        <button 
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
          >
          Submit
        </button>
      </form>
      </div> 

      {/* <div className="bg-blue-500">
        <Link 
            className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            href="/redirect"> View Products
        </Link>
      </div> */}

      <Footer />
    </main>
  );
 }
