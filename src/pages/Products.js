import React, {useContext} from "react"
import {Context} from "../Context"
import Ship from "../Ship"

const Products = (props) => {
    const {products} = useContext(Context)
    const allShips = products.map((ship, i) => 
        <Ship  key={i} ship={ship} />
    )
    
    return(
        <div className="products">
            <h1 style={{width: "100%", textAlign: "center"}}>Große Auswahl zu Fairen Preisen <br/>Viel Spaß beim Shopping</h1>
            {allShips}
        </div> 
    )
}

export default Products