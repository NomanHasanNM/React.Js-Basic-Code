///App.js

import React from 'react'
import Child from "./SATET_LIFTING/Child"

 export default function App() {

  const Noman = " I am Noman Hasan And my name is Noman (app)"

  const handleChildData= (ChildData) => {
    alert("App: " + ChildData);

  }
  return(
    
        <div>
      <Child data={Noman} onChildData={handleChildData}/>
      
    </div>
  )
}


///Child.js

import React from 'react'

const Child = (props) => {

    const data = " I am from child component";
    props.onChildData(data);
 
  return( 
    <div>
      <p>  I am child  </p>
      <p> {props.data} </p>
    </div>
  )
}

export default Child;

