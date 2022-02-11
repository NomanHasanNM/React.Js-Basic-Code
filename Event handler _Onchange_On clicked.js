//App.js

import React from 'react'
import EVENT_HANDLER_CLASS from './EVENT_HANDLER_CLASS/index'

export default function App() {
  return (
    <div>
      <EVENT_HANDLER_CLASS/>
    </div>
  )
}


///index.js

import React from 'react'
import reactDom from 'react-dom'
import App from './App'

reactDom.render(<App/> , document.getElementById('root'));

///index.js

import React, { Component } from 'react'

 class EVENT_HANDLER_CLASS extends Component {
     constructor(props) {
      super(props)
    
      this.state = {
         changedValue : '' 
      }
    }     
   handleOnChage = (m) => {
       this.setState({
      changedValue : m.target.value
       }, () => {
        console.log(m.target.value)
       })
   }  
  render() {
    return (
      <div>
        <input type ="text" onChange={this.handleOnChage} />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
 export default EVENT_HANDLER_CLASS