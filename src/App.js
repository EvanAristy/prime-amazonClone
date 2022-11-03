import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// Css
import "./App.css";
// Components
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Checkout from "./Pages/Checkout";
import Login from "./Components/Login";
import Payment from "./Pages/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51M0ABkClSnzXc2In80311P14DVEpSwTjJfrqcY1tKNNzif1cvIS1HsMa4LBqojbmzYbSG5gUI2n3YvqyM5n408mm00gFVeyoo8"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM

    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
      </Routes>
    </div>
  );
}

export default App;
