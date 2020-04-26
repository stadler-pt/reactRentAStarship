import React, {useState, useEffect} from "react"

const Context = React.createContext()

const ContextProvider = (props) => {
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])

useEffect(() => {
fetch("https://swapi.dev/api/starships/?page=1")
    .then(response => response.json())
    .then(data => {
        setProducts(data.results)
        return fetch("https://swapi.dev/api/starships/?page=2")
    }).then(response => response.json())
    .then(data => {
        setProducts(prev => prev.concat(data.results))
        return fetch("https://swapi.dev/api/starships/?page=3")
    }).then(response => response.json())
    .then(data => {
        setProducts(prev => prev.concat(data.results))
        return fetch("https://swapi.dev/api/starships/?page=4")
    }).then(response => response.json())
    .then(data => {
        setProducts(prev => prev.concat(data.results))
    })
}
, [])

    const addToCart = (newItem) => {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    const removeFromCart = (oldItem) => {
        const item = cartItems.filter(x => x.name !== oldItem.name)
        setCartItems(item)
    }

    const emptyCart = () => {
        setCartItems([])
    }

    return (
        <Context.Provider value={{
            products, 
            addToCart, 
            cartItems, 
            removeFromCart, 
            emptyCart}
        }>
                {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}