import React, {Fragment, useState} from "react";
import "./App.css"
import PayPal from "./components/PayPal"

function App() {
  const [checkout, setCheckout] = useState(false)
  
  const [price, setPrice] = useState(null)

  const pay = () => {
    setCheckout(true);
    setPrice(12.99)
  }

  return (
    <Fragment>
      <h1>Paypal Form</h1>
      {checkout ? 
        (<PayPal price={price}/>)
       : 
      (<button onClick={pay}>Checkout</button>)
      }
    </Fragment>
  );
}

export default App;