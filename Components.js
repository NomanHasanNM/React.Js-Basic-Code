///index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import card from './components/card' 

ReactDOM.render(
  <App/>,
 
  document.getElementById('root')
);
///app.js 




import React from  "react"
import card from "./components/card";

function App(){
  return <div>
    <h1 className="headingStyle"> I am Noman </h1>
    <card/>
    <card/>
    <card/>
    <card/>
  </div>



}export default App;

//card.js///


 const date = new Date();
 const dateName = date.getDate();
 const monthName = date.getMonth();
 const currentYear = date.getFullYear();
 
function card(){
    return <div className="card">
     <h1 className="headingStyle"> I am Noman Hasan </h1>
  <div className="card">
  <h2 className="cardTitle">{About}</h2>
  <h3 className="cardDesc">{details}</h3>
  <p className="cardFooter"> {dateName + "/" + monthName + "/" +  currentYear}</p>

    </div>
    </div>         
}
export default card;