
///appp.js

import react from "react";
import card from './components/card'
import Data from './data.json'

function App(){

  // let items = [];
  // for(let x=0; x<Data.length; x++){
  //   items.push(<card titileText={Data[x].title} descText={Data[x].desc}/>)


  return <div>

    <h1 className=" headingStyle">  Todo App</h1>
   {Data.map((items, index) => <card key={index} titleText={items.title} desctext={items.desc}/>);

  
  </div>
}  
export default App;


/////data.json



[
    {
        "title" : "call home",
        "desc" : "this is desc2"
    },

    {
        "title" : "call home",
        "desc" : "this is desc2"
    },
    {
        "title" : "call father",
        "desc" : "this is desc3"
    },

    {
        "title" : "call mother",
        "desc" : "this is desc3"
    },
    {
        "title" : "call sister",
        "desc" : "this is desc4"
    }

]

////////card.js


 const date = new Date();
 const dateName = date.getDate();
 const monthName = date.getMonth();
 const currentYear = date.getFullYear();
 
function card(props){
  const{ titleText, descText} = props;
   
  <div className="card">
  <h2 className="cardTitle">{titleText}</h2>
  <h3 className="cardDesc">{descText}</h3>
  <p className="cardFooter"> {dateName + "/" + monthName + "/" +  currentYear}</p>

   
    </div>         
}
export default card;

