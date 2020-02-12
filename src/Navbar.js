import React, {useContext, useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {Context} from "./Context"
import burger from "./img/burger.png"

import cart from "./img/shopping_cart.svg"

const Navbar = () => {
    const {cartItems} = useContext(Context)
    const [unfold, setUnfold] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const openNav = () => {
        unfold ?
            setUnfold(false) :
            setUnfold(true)
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 681) {setUnfold(false)}
            setWindowWidth(window.innerWidth)
        })
        return () => window.removeEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, []
    )

    const toggle = () => {
        if (windowWidth >= 681) {return "flex"}
        else if (windowWidth < 681 && unfold === false) {return "none"}
        else {return "flex"}
    }

    return (
        <nav>
            <Link className="logo" to="/">
                <h1 className="logo">Rent A Starship</h1>
            </Link>
            <img className="burger" src={burger} alt="" onClick={openNav} />
            <div id="navContainer" style={{display: toggle()}} >
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/products">
                    Produkte
                </Link>
                <Link className="navLink" to="/cart">
                    <img height="24px" src={cart} style={{marginBottom: "-0.2em"}} alt="" />
                    {cartItems.length !== 0 ? <sup>{cartItems.length}</sup> : false}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar