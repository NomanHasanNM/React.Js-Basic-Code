///app.js



import React from 'react'
import STATE from './STATE'

export default function () {
  return <div>

     <STATE/> 
  </div>;
}


////state.js


 import React, { Component } from 'react'
 import './style.css'
 
  
 export default class STATE extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    handleIncrement= () => {
        this.setState({ 
        count : this.state.count + 1

        })
    } 
    handleDecrement= () => {
        this.setState({ 
        count : this.state.count - 1

    })
    }   
   render() {
    const {count} = this.state
     return <div>
         <h1> Count : {count} </h1> 
         <button onClick={this.handleIncrement}> + </button>
         <button onClick={this.handleDecrement}> - </button>
         
         
     </div>
   }
 }
 

////style.css


body{

    background: rgb(red, green, blue);
    color: aqua;
}
button{
     padding: 5px;
     border: tomato;
     border-radius: 5px;
     background-color: blue;
     color: brown;
     margin-right: 5px;
     margin-left: 5px;
     font-size: 3rem;
     width: 70px; 
}


//////index.js


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <App/>,
 
  document.getElementById('root')
);
