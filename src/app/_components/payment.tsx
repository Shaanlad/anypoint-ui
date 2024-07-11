import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    return (
        <>
            <h2>Payment Block</h2>
        </>    
    )
}

const PaymentGtwy = () => {
    const stripePromise = loadStripe('pk_test_scwYDGCgb9qeXRH1wmuLxkrq001lJo8Cze');
    return (
        <Elements stripe={stripePromise}>
            <Payment />
        </Elements>
    );
}

export default PaymentGtwy;