import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import emailjs from 'emailjs-com';

const Payment = ({ riderInfo }) => {
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handleToken = async (token) => {
    const response = await fetch('http://localhost:9000/payment/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: token.id,
        amount: 1000, // in cents
      }),
    });

    const data = await response.json();

    if (data.success) {
      setPaymentComplete(true);
      sendConfirmationEmail();
    } else {
      alert('Payment failed');
    }
  };

  const sendConfirmationEmail = () => {
    const serviceID = 'YOUR_EMAILJS_SERVICE_ID';
    const templateID = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userID = 'YOUR_EMAILJS_USER_ID';

    emailjs.send(serviceID, templateID, riderInfo, userID).then(
      (response) => {
        console.log('Email sent:', response.text);
      },
      (error) => {
        console.error('Email error:', error);
      }
    );
  };

  return (
    <div>
      {!paymentComplete ? (
        <StripeCheckout
          stripeKey="pk_test_51MvOUrDD4QlicA8Ycj7WcHVavbqaxBPYtdeDh8SC5jwxPn7FbnJilIVpJNkgARfn87XrjoHnMBYMz22Gy6y2yITN00mABOwVyq"
          token={handleToken}
          amount={1000} // in cents
          name="Carpooling app"
          description="Ride payment"
        />
      ) : (
        <div>
          <h2>Payment complete!</h2>
          <p>A confirmation email has been sent to you.</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
