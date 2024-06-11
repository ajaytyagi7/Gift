import React from 'react'
import useCartContext from '../CartContext';

const Payment = () => {

    const {getcartTotal} = useCartContext();

    const paymentHandler = async (event) => {

        const amount = getcartTotal() * 100;
        const currency = 'INR';
        const receiptId = '122345556'
        const res = await fetch('http://localhost:4000/payment/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount,
                currency,
                receiptId: receiptId
            })
        });

        const order = await res.json();
        console.log(order);

        var option = {
            key: '',
            amount,
            currency,
            name: 'Gift Shop',
            description: 'Test Transaction',
            image: 'https://example.com/your_logo',
            order_id: order.id,
            handler: async function (response) {
                alert('Payment Done Successfully');
            },
            prefill: {
                name: ' Luxify',
                email: 'tyagiajay785186@gmail.com',
                contact: '9999999999'
            },
            notes: {
                address: 'Luxify'
            },
            theme: {
                color: '#3399cc'
            }



        }
        var rzp1 = new window.Razorpay(option);
        rzp1.open("Payment failed", function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.step);
            alert(response.error.reason);


        });
        rzpl.open();
        event.preventDefault();


    }
    return (
        <div>
            <div>
                <div className="col-md-3 mx-auto py-4">
                    <div className="shadow p-3">
                        <div className="card-body gy-4">
                            <h4 className="card-title text-center fw-bold">Payment</h4> <hr />
                            <div className="row">
                                <div className="col">
                                    <img className='img-fluid p-3 ' src="data:image/png;base64,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" alt="" />
                                </div>
                                <div className="col">
                                    <img className='img-fluid p-3 mt-2' src="data:image/png;base64,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" alt="" />
                                </div>
                                <div className="col">
                                    <img className='img-fluid p-3 mt-3' src="data:image/jpeg;base64,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" alt="" />
                                </div>
                            </div>

                            <h5 className='p-2 mt-3'>Total amount - {getcartTotal()}</h5>
                            <button type="submit" className="btn btn-primary w-100 mt-5" onClick={paymentHandler}>Pay With Rozerpay</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment