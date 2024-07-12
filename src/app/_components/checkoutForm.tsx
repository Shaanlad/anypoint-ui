'use client'
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const BASE_URL = 'http://localhost:3030';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error
        // , paymentIntent 
    } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${BASE_URL}/success`,
      },
    //   redirect: "if_required",
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } 
    // else if(paymentIntent && paymentIntent.status === "succeeded") {
    //     setMessage("Payment Status : " + paymentIntent.status + "🎉")
    // }
    else {
      setMessage("An unexpected error occured!");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <br/>
      <button disabled={isProcessing || !stripe || !elements} id="submit" className="bg-red-500 hover:bg-red-400 text-white items-center justify-between font-bold font-mono py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded ">
        <span id="button-text">
          {isProcessing ? "Please Wait ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}