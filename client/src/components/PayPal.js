import React, {useRef, useEffect, Fragment} from 'react'

const PayPal = (props) => {
    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Business Products",
                            amount: {
                                currency_code: "USD",
                                value: `${props.price}`
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log(order)
                window.alert("Payment Received")
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])

    return (
        <Fragment>
            <div ref={paypal}></div>
        </Fragment>
    )
}

export default PayPal
