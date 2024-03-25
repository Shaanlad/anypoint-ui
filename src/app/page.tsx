'use client';
import axios from 'axios';
import { url } from 'inspector';
import { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

function onUserNameChange(event: any) {
  console.log(event.target.value);
}


function onPasswordChange(event: any) {
  console.log(event.target.value);
}

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const response = await fetch('http://localhost:3030/auth/', {
    method: 'GET',
  })
  console.log('resp >> ', response);
}

const handleSubmit = async (
  // e: React.ChangeEvent<HTMLFormElement>) => {
  e: any) => {
    e.preventDefault();

    try {
      const resp = await axios('http://localhost:3030/auth/', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },          
      })
      console.log(resp.data);
  }
  catch (error) {
    console.error(error);
  }
}

const handleGetProducts = async (
  // e: React.ChangeEvent<HTMLFormElement>) => {
  e: any) => {
    e.preventDefault();

    try {
      const resp = await axios('http://localhost:3030/product/', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },          
      })
      console.log(resp.data);
  }
  catch (error) {
    console.error(error);
  }
}


export default function Home() {

  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm  ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-sky-950"> 
          Welcome to Anypoint Energy&nbsp; 
        </p>
      </div>

      <div className="relative flex place-items-center">
        <form className='items-center justify-between'>
        {/* <form onSubmit={handleSubmit}>   */}
        <label className='block'>
          <span className="block text-sm font-medium text-slate-700"> Username </span> &nbsp;
          <input 
            type="text" 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
          onChange={onUserNameChange}
          />
        </label> <br/><br/>
        <label className='block'>
          <span className="block text-sm font-medium text-slate-700"> Password </span> &nbsp;
          <input 
            type="text" 
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
            onChange={onPasswordChange}
          />          
        </label> <br/>
        <Link href="/home">
          <button 
            className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
            >
            Submit
          </button>
        </Link>
      </form>
      </div>

      <div className="bg-blue-500">
        {/* <Link href="/redirect"> Redirect </Link> */}
        <button 
          className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => router.push('/home')}>
          Click here to read more
      </button>
      </div>

      <div className="bg-blue-500">
        {/* <Link 
        className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        href="/redirect"> Get Products </Link> */}
        <button 
          className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={handleGetProducts}>
          Get Products
      </button>
      </div>
    </main>
  );
}
