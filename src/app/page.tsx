'use client'
import axios from 'axios';
import { url } from 'inspector';
import { FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { any } from 'prop-types';
import { NextPageContext } from 'next'
import { useState, useEffect } from 'react'

export default function Home() {

// function TableData() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('http://localhost:3030/product/')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        console.log('products >> ', data)
    })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>
  // return data;
  // return (
  //   <div>
  //     <h1>{data}</h1>
  //   </div>
  // )

  // export default function Home() {
  // const router = useRouter();
  // const products: any = Object.entries(TableData());

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm  ">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-sky-950"> 
          Welcome to Anypoint Energy&nbsp; 
        </p>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm "> 
        <ul>
          {data && data.map((item: any, index: number) => (
            <li key={index} className='fixed left-0 top-0 flex w-full justify-right border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-sky-950 shadow-lg shadow-blue-500/50'>
              <span>
                <p>
                  Product Name - {item.name}
                </p>
                <p>
                  Product Description - {item.description}
                </p>
                <p>
                  Product Price - ${item.price}
                </p>
              </span>
            </li> )
          )}
        </ul>
      </div>
    </main>
  );
 }
// }
