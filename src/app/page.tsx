'use client'
import Link from 'next/link';

export default function Home() {
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
    </main>
  );
 }
