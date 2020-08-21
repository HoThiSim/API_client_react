import React, { Component } from 'react'
import API from '../APIHref'
import Product from './Product';
export default class ProductList extends Component {
    constructor(){
        super();
        this.state={
            products:[],
            isLoading:true
        }
    }
    componentDidMount(){
       fetch(API.GET_PRODUCT)
       .then(response=>response.json())
       .then(data=>this.setState({isLoading:false, products:data}))

    }
    render() {
        if(this.state.isLoading){
            return(
                 
                 <div class="container">
                     <h6>Loading..</h6>
                 </div>
                 
            )
        }
        return (
            <div class="container">
                <table class="table">
                <thead class="thead-inverse">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(
                                (data,i)=><Product data={data} key={i}/>
                            )
                        }
                    </tbody>
            </table>
            </div>
        )
    }
}
