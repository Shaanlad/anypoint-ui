
'use client'
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect, MouseEventHandler } from 'react';
import { FormEvent } from 'react';
import Header from '../_components/header';
import Footer from '../_components/footer';
import Modal from '../_components/modal';

const BASE_URL = 'http://localhost:3030';

export default function Home(){

    // const router = useRouter();
    // const { firstname, lastname, email, isAdmin } = router.query;
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const firstname = searchParams.get('firstname');



    const [products, setProducts] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [showModal, setshowModal] = useState(false)
    const [error, setError] = useState(null);
    const [showSelectedProductBlock, setShowSelectedProductBlock] = useState(false);
    const [showSelectedProduct, setShowSelectedProduct] = useState('');

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    useEffect(() => {
    fetch('http://localhost:3030/product/')
        .then((res) => res.json())
        .then((products) => {
        setProducts(products)
        setLoading(false)
        console.log('products >> ', products)
    })
    }, [])        

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
          const response = await fetch(`${BASE_URL}/product`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: productName, 
                description: productDescription, 
                price: productPrice }),
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

    const handleProductSelect = (item: any) => {
        setShowSelectedProductBlock(true);
        console.log('Item clicked >> ', item)
        setShowSelectedProduct(item);    
    }
    

    if (isLoading) return <p>Loading...</p>
    if (!products) return <p>No products</p>
    
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Header />

                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg float-right">
                    <Link className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded float-right cursor-auto"
                    href=""> 
                    Welcome {firstname}
                    </Link>
                <br/>
            </div>
                <br/>
                <div className='w-9/12'>                    
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
                            className="bg-amber-500 hover:bg-amber-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-amber-700 hover:border-amber-500 hover:text-black rounded"
                            href="/enroll"> Enroll Today!
                        </Link>
                    </span>
                    <span className='float-right'>
                        &nbsp;&nbsp;&nbsp;
                    </span>
                    <span className='float-right'>
                        <Link 
                            className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                            href="/users"> User Listing
                        </Link>
                    </span>
                    <span className='float-left'>
                        <button 
                            className="bg-green-500 hover:bg-green-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded "
                            onClick={() => setshowModal(true)}
                            >
                            Create New Product
                        </button>
                    </span>
                </div> <br/><br/>

                { showModal ? (
                    <>
                        {/* <Modal /> */}
                        <div className='text-black fixed left-0 top-0 flex w-full justify-centre border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:bg-white lg:static lg:w-auto lg:border lg:bg-gray-200 lg:p-4 shadow-lg lg:rounded-xl my-6'>
                            
                            <div className="relative flex font-mono text-left">
                                <form onSubmit={handleSubmit}>
                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700"> 
                                    <p> Name </p> 
                                    <input 
                                        type="text" 
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}        
                                    />          
                                    </span>          
                                    </div> <br/>

                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700"> 
                                    <p> Description </p> 
                                    <textarea 
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                        value={productDescription}
                                        onChange={(e) => setProductDescription(e.target.value)}
                                    />  
                                    </span>
                                    </div> <br/>

                                    <div className='block'>
                                    <span className="block text-sm font-medium text-slate-700"> 
                                    <p> Price </p> 
                                    <input 
                                        type="textbox" 
                                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                        invalid:border-pink-500 invalid:text-pink-600
                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-black" 
                                        value={productPrice}
                                        onChange={(e) => setProductPrice(e.target.value)}
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
                                    &nbsp;&nbsp;
                                    <button 
                                        className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded "
                                        onClick={() => setshowModal(false)}
                                        >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </>
                    ) : null }
                <br/><br/>

                {showModal ? null : 
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
                     </div> }
                 <br/><br/>                             
                <Footer />
            </main>            
        </>
    );
}