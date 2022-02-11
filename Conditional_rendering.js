//App.js

import React from 'react'
import CONDITIONAL_RENDERING from './CONDITIONAL_RENDERING/index'


export default function App()

{
  return (

    <div>

       <CONDITIONAL_RENDERING />
    </div>
  )

}

///index.js
import React, { Component } from 'react'

  class CONDITIONAL_RENDERING extends Component {
  render() {
    return (
      <div> I am noman </div>
    )
  }
}


////LoginPage.js

export default CONDITIONAL_RENDERING


import React from 'react'

export default function LogInPage() {
  return (
    <div>
        <h1>LogInPage</h1>
        
        </div>
  )
}

////HomePage.js

import React from 'react'

export default function HomePage() {
  return (
    <div>
        <h1> HomePage </h1>
    
    </div>
  )
}
