'use client'
import { useState, useEffect } from 'react';

export default function ProductBlock(){ 

    const [products, setProducts] = useState(null)
    const [showSelectedProductBlock, setShowSelectedProductBlock] = useState(false);
    const [showSelectedProduct, setShowSelectedProduct] = useState('');
    const [isLoading, setLoading] = useState(true)
    
    useEffect(() => {
    fetch('http://localhost:3030/product/')
        .then((res) => res.json())
        .then((products) => {
        setProducts(products)
        setLoading(false)
        console.log('products >> ', products)
    })
    }, [])        

    const handleProductSelect = (item: any) => {
        setShowSelectedProductBlock(true);
        console.log('Item clicked >> ', item)
        setShowSelectedProduct(item);    
    }

    if (isLoading) return <p>Loading...</p>
    if (!products) return <p>No products</p>

    return (
        <>
            <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm w-full flex relative"> 
                <div className='w-1/2 text-black'>
                    <p className='absolute inset-x-0 top-0 w-1/3 text-2xl text-center decoration-sky-600 hover:decoration-blue-400 my-6 mx-3 bg-blue-500 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'>
                        Select Your Product
                    </p>
                    {showSelectedProductBlock ? (
                        <>                                    
                            <div className='absolute px-4 inset-x-4 border-b border-gray-300 backdrop-blur-2xl dark:bg-white lg:static lg:border lg:bg-gray-200 lg:p-4 shadow-lg rounded w-3/4'>
                                <div className=''>
                                <p className='text-black font-bold underline underline-offset-2 '>
                                    You Selected
                                </p> <br/>
                                <span className=''>
                                    <p className='font-semibold'>
                                        {showSelectedProduct.name}
                                    </p>
                                    <p className=''>
                                        {showSelectedProduct.description}
                                    </p>
                                    <p>
                                        ${showSelectedProduct.price}
                                    </p>
                                </span> 
                                </div>                    
                            </div>  
                                                            
                        </> )
                    : null }
                </div>

                <div className='w-1/2'>
                    <ul className=''>
                    {products && products.map((item: any, index: number) => (
                        <li key={index} className='text-black fixed left-0 top-0 flex w-full justify-centre border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg hover:bg-amber-300 my-6 cursor-pointer'>
                            <span onClick={() => handleProductSelect(item)}>
                                <p className='text-base font-semibold'>
                                    {item.name}
                                </p>
                                <p>
                                    {item.description}
                                </p>
                                <p>
                                    ${item.price}
                                </p>
                            </span>
                        </li>
                        )
                    )}
                    </ul>
                </div>                        
            </div> 
        </>
    )
}
