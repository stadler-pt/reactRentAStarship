import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from "./Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"

const App = () => {
  return (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/products"><Products /></Route>
      <Route exact path="/cart"><Cart /></Route>
      <Route path="/products/:length"><ProductDetail /></Route>
    </Switch>
    <p style={{fontSize: "10px", textAlign: "center", color: "yellow"}}>Made with the <a href="https://swapi.co/">Star Wars API</a></p>
  </>
  ) 
}
export default App
