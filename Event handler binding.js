
///App.js
import React from 'react'
import EVENT_BINDING from './EVENT_BINDING/index'

export default function App() {
  return (
    <div>
      <EVENT_BINDING/>
    </div>
  )
}



////index.js 

import React, { Component } from 'react'

 class EVENT_BINDING extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count : 0,
       
    }
    this.handleClick = this.handleClick.bind(this);
  }
    
  handleClick(){
     this.setState({
    count : this.state.count + 1

     })
  }
  

  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.handleClick}> increase </button>
        <button onClick={this.handleClick}> Koro </button>
      </div>
    )
  }
}
export default EVENT_BINDING