import React, { Component } from 'react'
import API from '../APIHref';
import { Redirect } from 'react-router-dom';
export default class Product extends Component {
    constructor(){
        super();
        this.state={
            isDeleted:false
        }
        this.submit=this.submit.bind(this);
        this.postData=this.postData.bind(this);
    }
    submit(event){
        event.preventDefault();
        this.postData(API.DELETE_PRODUCT,{id:event.target['id'].value})
        .then(data=>this.setState({isDeleted:true}))
    }
    async  postData(url = '', data = {}) {

        const response = await fetch(url, {
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer', 
          body: JSON.stringify(data) 
        });
        return response.json(); 
      }
    render() {
        if(this.state.isDeleted){
            return(
                <Redirect to="/" />
            )
        }
        var data=this.props.data;
        return (
        <tr>
            <td scope="row">{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td><img width="300px" height="300px" src={data.image}/></td>
            <td>{data.price}</td>
            <td>
                <a name="" id="" class="btn btn-primary" role="button"><i class="fa fa-eye" aria-hidden="true"></i></a>
                <form method="post" onSubmit={this.submit}> 
                    <input type="text" name="id" value={data.id} hidden />
                    <button  class="btn btn-danger"  type="submit"><i class="fa fa-trash" aria-hidden="true"></i></button>
                </form>
            </td>
        </tr>
        )
    }
}
