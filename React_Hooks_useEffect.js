//App.js

import React from 'react'
import UseEffectExample from './useeffect/UseEffectExample'

 export default function App() {
  
  return(
    
        <div>
      <UseEffectExample/>     
    </div>
  )
  }

///UseEffectExample.js


import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    const [Count, setCount] = useState(0);
   const [isBuffer, setisBuffer] = useState(false); 
    useEffect(() => {
        console.log("useEffect");
    
    }, [Count]);
  return (
    <div>
        {console.log("rendering")}
        <h1>Count : {Count} </h1>
        <button onClick={() => {
            setCount((Count) => Count + 1)
        }
        }> + </button>
      <button onClick={() => {
            setisBuffer(!isBuffer);
        }
        }> isBuffer </button>
    </div>
 )}
export default UseEffectExample
