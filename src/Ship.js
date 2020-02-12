import React, {useState, useContext, useEffect} from "react"
import {Link} from "react-router-dom"
import done from "./img/done_white.png"
import {Context} from "./Context"

const Ships = ({ship}) => {
    const [hover, setHover] = useState(false)
    const {addToCart, cartItems} = useContext(Context)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 1367) {setHover(true)}
            else {setHover(false)}
            setWindowWidth(window.innerWidth)
        })
        return () => window.removeEventListener("resize", () => {
            if (window.innerWidth < 1367) {setHover(true)}
            else {setHover(false)}
            setWindowWidth(window.innerWidth)
        })
    }, []
    )

    const cart = () => {
        const inCart = cartItems.some(item => item.name === ship.name)
        if (inCart) {
            return (<img style={{float: "right"}} src={done} alt="Check" />)
        }
        else {
            return(hover && ship.cost_in_credits === "unknown" ? hover :
            hover ? 
            <p className="button" onClick={() => addToCart(ship)}>In den Warenkorb</p>
            : hover)
        }
    }

    return (
        <div 
        className="starship"
        onMouseEnter={windowWidth > 1366 ? () => setHover(true) : undefined}
        onMouseLeave={windowWidth > 1366 ? () => setHover(false) : undefined}
        style={{position: "relative"}}
        >
            <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "baseline"}}>
                <h2 style={{margin: 0}}>{ship.name}</h2>
                {ship.cost_in_credits === "unknown" ? 
                    <span>Derzeit nicht auf Lager</span> :
                    <span>Preis: {ship.cost_in_credits} Credits</span>}
            </div>
            <p>Schiffsklasse: {ship.starship_class}</p>
            <Link style={{color: "yellow"}} to={`/products/${ship.length}`}>Details</Link>
            {cart()}          
        </div>

    )
}

export default Ships