
'use client'
import { useState } from 'react';
import { FormEvent } from 'react';

const BASE_URL = 'http://localhost:3030';

export default function ProductCreationBlock({ onProductCreationModalDisplay } : {onProductCreationModalDisplay: any}){ 

    const [showCreateProductModal, setShowCreateProductModal] = useState(false)
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)



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
            setShowCreateProductModal(false);       
            onProductCreationModalDisplay(showCreateProductModal)

          } else {
            console.log('Error Encountered. Status ! 200');
          }      
        } catch (error) {
          console.log('Error inserting item. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleSendModalValue = () => {
        console.log('Inside handleSendModalValue')
        onProductCreationModalDisplay(showCreateProductModal)
    }

    return (

        <>                        
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

                            <button 
                            className="bg-blue-500 hover:bg-blue-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded "
                            >
                            Submit
                            </button>
                            &nbsp;&nbsp;
                            <button 
                                className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded "
                                onClick={handleSendModalValue}
                                >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )

}