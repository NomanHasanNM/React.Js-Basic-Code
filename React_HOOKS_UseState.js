///app.js

import React from 'react'
import HOOKS_USESTATE1 from './HOOKS_USESTATE1/index1'
import HOOKS_USESTATE2 from './HOOKS_USESTATE2/index2'

export default function App() {
  return (
    <div>
      <HOOKS_USESTATE2/>

    </div>
  )
}


//index1.js

import React, { Component } from 'react'

 class HOOKS_USESTATE1 extends Component {

constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}
 handleIncrement = () => {
     this.setState({
       count : this.state.count + 1

     })
 }

  render() {

    const {count} = this.state;
    return (
      
      <div>
          <h1> Count : {count} </h1>
       <button onClick = {this.handleIncrement}>Increment </button>
      </div>
    )
  }
}
export default HOOKS_USESTATE1


//index.js

import React from 'react'
import reactDom from 'react-dom'
import App from './App'

reactDom.render(<App/> , document.getElementById('root'));

///index.js

import React, {useState } from 'react'

 function HOOKS_USESTATE2() {

    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count +1);
    }

  return (
    <div>
        <h1> Count : {count}</h1>
      <button onClick={handleIncrement}> Increament</button>
    </div>
  )
}
export default  HOOKS_USESTATE2