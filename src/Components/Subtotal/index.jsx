import { SportsBasketball } from "@mui/icons-material";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { Link, useNavigate } from "react-router-dom"
// Css
import "./styles.css";

const Subtotal = () => {
  // ** gives us the browser history **
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const getTotal = () => {
    let total = 0;

    for (let i = 0; i < basket.length; i++){
      total += basket[i].price
    }
    return total;
  }


  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
                {/* hw */}
              Subtotal ({basket.length} items):
              <strong>
                ${getTotal()}
              </strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // hw
        value={0} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {/* <Link to="/payment"> */}
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
      {/* </Link> */}
      
    </div>
  );
};

export default Subtotal;
