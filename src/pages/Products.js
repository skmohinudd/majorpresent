import React, { useEffect } from 'react';
import './Product.css'

const PayByRazorPay = () => {
    const options = {
        key: 'rzp_test_iPUYZg3QpZNlDd',
        amount: '50000', //  = INR 1
        name: 'Donation',
        description: 'Donate for MakeFuture Foundation',
        image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
        handler: function(response) {
            alert(response.razorpay_payment_id);
        },
        prefill: {
            name: 'khaja',
            contact: '6301557253',
            email: 'skkhajamohinuddin151@gmail.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
      

         
        <div className='boss-div'>
          
               <h2>
               Many orphanages are quite large, and this means that these institutions need quite a bit of money to help their place running. We from makefuture are asking for your support in helping children in orphanages to have a comfortable life while waiting for a good family to adopt them
                  
               </h2>

               <h3>To support Our Comunity pls Donate 500/-</h3>

               <button onClick={openPayModal} className='btn'>Donate</button>
          

          
      </div>
        </>
    );
};

export default PayByRazorPay;