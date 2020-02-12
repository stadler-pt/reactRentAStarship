import React, {useContext, useState} from "react"
import {Context} from "../Context"
import remove from "../img/remove_white.png"

const Cart = (props) => {
    const {cartItems, removeFromCart, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Jetzt bestellen!")

    let total = 0

    const allShips = cartItems.map((ship, i) => {
        total += parseInt(ship.cost_in_credits);
        return (
        <>    
        <div className="shipsInCart" key={i}>
            <div style={{display: "flex", alignItems: "baseline"}} >
                <img 
                    src={remove} alt="" 
                    onClick={() => removeFromCart(ship)} 
                    style={{marginRight: "2em", cursor: "pointer"}} 
                />
                <h3 style={{margin: 0,textAlign: "left"}} >{ship.name}</h3>
            </div>
            <p className="price" style={{margin: 0}} >{ship.cost_in_credits} Credits</p>
        </div>
        <hr className="line" />
        </>
        )
    })
    
    const order = () => {
        setButtonText("Bestellung wird verarbeitet...")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return(
        <div className="cart">
            {allShips}         
            {allShips.length === 0 ?
                <h1>Der Warenkorb ist leer!</h1> :
                <div className="checkout">
                    <button style={{lineHeight: "23.5px"}} className="orderButton" onClick={order} >{buttonText}</button>
                    <h2 
                        style={{display: "inline"}} >
                            Gesamtkosten: 
                                <span style={{marginLeft: "1em", borderBottom: "double black 5px"}} >
                                    {total} Credits
                                </span>
                    </h2>   
                </div>
                }  
        </div> 
    )
}

export default Cart