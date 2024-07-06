import React from 'react';

function PaytmTestPayment() {
    const initiatePayment = () => {
        const config = {
            "root": "",
            "flow": "DEFAULT",
            "data": {
                "orderId": "TEST_" + new Date().getTime(), // Unique Order ID
                "token": "YOUR_TOKEN_FROM_PAYTM", // This should be fetched from your server in a real application
                "tokenType": "TXN_TOKEN",
                "amount": "1.00" // Sample amount
            },
            "handler": {
                "transactionStatus": function(data) {
                    console.log("Payment status: ", data);
                },
                "notifyMerchant": function(eventName, data) {
                    console.log(eventName, data);
                }
            }
        };

        if (window.Paytm && window.Paytm.CheckoutJS) {
            window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
                window.Paytm.CheckoutJS.invoke();
            }).catch(function onError(error) {
                console.log("Error", error);
            });
        }
    };

    return (
        <div>
            <button onClick={initiatePayment}>Pay with Paytm</button>
        </div>
    );
}

export default PaytmTestPayment;
