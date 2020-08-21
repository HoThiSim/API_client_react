import React, { Component } from 'react'
import NabBar from './components/NavBar'
import {BrowserRouter, Switch, Route }from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <NabBar/>
     <Switch>
       <Route path="/" exact>
         <ProductList/>
       </Route>
       <Route path="/add-product" exact>
          <AddProduct/>
       </Route>
     </Switch>
     </BrowserRouter>
    )
  }
}
