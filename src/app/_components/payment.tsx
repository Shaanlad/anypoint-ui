import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./checkoutForm";
// import CheckoutForm from "../checkout/page";

const Payment = (props: any) => {
    const [stripePromise, setStripePromise] = useState<any | null>('');
    const [clientSecret, setClientSecret] = useState('')

    const BASE_URL = 'http://localhost:3030';

    useEffect(() => {        
        fetch(`${BASE_URL}/stripe`)
        .then(async(resp) => {
                const { publishableKey } = await resp.json();
                setStripePromise(loadStripe(publishableKey));
            });
    }, []);


    useEffect(() => {
        fetch(`${BASE_URL}/stripe/create-payment-intent`, {
            method: 'POST',
            body: JSON.stringify({})
        })
        .then(async(resp) => {
                const { clientSecret } = await resp.json();
                setClientSecret(clientSecret);
            });
    }, []);



    return (
        <>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </>    
    )
}

export default Payment;