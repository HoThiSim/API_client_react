import React, { Component } from 'react'
import API from '../APIHref'
import { Redirect } from 'react-router-dom';
export default class AddProduct extends Component {
    constructor(){
        super();
        this.state={      
                name:'',
                description:'',
                price:'',
                image:'',
                isSent:false
        }
        this.encodeImage=this.encodeImage.bind(this);
        this.change=this.change.bind(this);
        this.postData=this.postData.bind(this);
        this.submit=this.submit.bind(this);
    }
    submit(event){
        event.preventDefault();
     this.postData(API.ADD_PRODUCT,
        {
            name:this.state.name,
            description:this.state.description,
            price:this.state.price,
            image:this.state.image
        })
     .then(data=>this.setState({isSent:true}))
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
    change(event){
    const target = event.target;
    const name = target.name;
    this.setState({
        [name]: target.value
    });
          
    }
    encodeImage(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = ()=>  this.setState({image:reader.result});
    reader.readAsDataURL(input.files[0]);
    };
    render() {
        if(this.state.isSent){
            return(
                <Redirect to="/" />
            )
        }
        return (
           <div class="container">
               <form method="post" onSubmit={this.submit}>
               <div class="form-group">
                 <label >Name</label>
                 <input type="text" onChange={this.change} class="form-control" name="name" id="" required aria-describedby="emailHelpId" placeholder="" />
               </div>
               <div class="form-group">
                 <label >Description</label>
                 <textarea type="text" onChange={this.change} class="form-control" name="description" id="" required aria-describedby="emailHelpId" placeholder="" />
               </div>
               <div class="form-group">
                 <label >Price</label>
                 <input type="number" onChange={this.change} class="form-control" name="price" id="" min='1' required aria-describedby="emailHelpId" placeholder="" />
               </div>
               <div class="form-group">
                 <label >Image</label>
                 <input type="file" onChange={this.encodeImage} class="form-control" name="image" />
               </div>
                <img width="100%" src={this.state.image}/>
               <button type="submit" class="btn btn-primary">Add</button>    
               </form>     
           </div>
        )
    }
}
