import React, {useContext} from "react";
import {useParams, Link} from "react-router-dom";
import {Context} from "../Context"

const ProductDetail = (props) => {
    const {products} = useContext(Context)
    const {addToCart, cartItems} = useContext(Context)
    const {length} = useParams()
    const thisShip = products.find(x => x.length === length)
    const inCart = cartItems.some(item => item.name === thisShip.name)

    return (
        <div className="details">
            <h1>{thisShip.name}</h1>
            <p>
                Dieses Schiff der Klasse {thisShip.starship_class} entstammt der Werft von {thisShip.manufacturer}.
                <br/>
                Mit einer Länge von {thisShip.length} Metern und einer Frachtkapazität von {thisShip.cargo_capacity} m³  bietet das Schiff genügend Stauraum.
                <br />
                {thisShip.passengers === "0" ?
                `Die Crew des Schiffs ist ${thisShip.crew} Person(en) stark.` : 
                `Neben der ${thisShip.crew} Personen starken Crew kann das Schiff ${thisShip.passengers} Passagiere mitführen.`}
            </p>
            <div className="buttonContainer">
                <Link className="orderButton" to="/products">Zurück zur Übersicht</Link>
                {thisShip.cost_in_credits === "unknown" ?
                    <p>Derzeit nicht auf Lager</p> :
                    inCart ?
                        <p>Bereits im Warenkorb</p> :
                        <p className="orderButton" onClick={() => addToCart(thisShip)}>In den Warenkorb</p>
                }
            </div>
        </div>     
    )
}

export default ProductDetail