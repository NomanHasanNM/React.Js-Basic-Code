//////html /////

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
          
   
    <title>React App</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    
    <div id="root"></div>
    <script src="../src/index.js"></script>
    
  </body>
</html>



///index.js/////

import React from 'react';
import ReactDOM from 'react-dom';
 const About = "Me as a Engineering";
 const details = " I live in sapahar and my family live in sapahar"; 
 const date = new Date();
 const dateName = date.getDate();
 const monthName = date.getMonth();
 const currentYear = date.getFullYear();
ReactDOM.render(
  <div>
  <h1 className="headingStyle"> I am Noman Hasan </h1>
  <div className="card">
  <h2 className="cardTitle">{About}</h2>
  <h3 className="cardDesc">{details}</h3>
  <p className="cardFooter"> {dateName + "/" + monthName + "/" +  currentYear}</p>
  </div>   
  </div>,
  document.getElementById('root')
);




/////style.css/////

.headingStyle{
    background-color: red;
    color: white;
    padding: 15px;
    text-align: center;

}

.cardTitle{
    text-align: center;
    text-shadow:green;
    margin-bottom: 5px;
}
.cardDesc{

    text-align: center;
    background-color: violet;
    font-weight: bold;
}
.cardFooter{
    text-align: center;
    background-color: tomato;
    font-weight: bold;
}
