////app.js

import React from 'react'
import FORM from './components/FORM/FORM'

export default function App() {
  return (
    <div>
      <FORM/>

    </div>
  )
}
///// Form.js


import React, {useState} from 'react'
import  style from  "./form.module.css"; 
export default function FORM() {

  const[name, setName] =  useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log("form is submitted");
    var userInfo = {
   name, email, password,

 };
 console.log(userInfo);
        console.log(name, email, password);
    e.preventDefault();
    
  };

  return (
    <div>

    <h1 >
       DIU Registration Form </h1>
    <form action="" onSubmit={handleSubmit}> 
       <div className={style.wrapper}> 

       <label htmlFor="name" > Name: </label>
      <input type="text" name="name" id="name" value ={name}onChange={handleNameChange} required></input>
         </div> 
      
     
     <div className={style.body}>
     <label htmlFor="email" > Email: </label>
      <input type="text" name="email" id="email"value={email} onChange={handleEmailChange} required></input>
     </div>
       
     <div>
     <label htmlFor="password" > Password: </label>
      <input type="password" name="email" id="password"value={password} onChange={handlePasswordChange}  required></input>
     </div>


     <div >
         <button type="submit"> Registration Done</button>
     </div>
      </form> 
    </div>
  
    

  )
}

////form.module.css


  .wrapper {
    max-width: 500px;
    width: 100%;
    background-color: aqua;
   padding: 100px 100px;
   position: absolute;
   top: 50%;
   left:50%;
   transform: translate(-10,-100);
   border-radius: 20px;

}
.wrapper .title{
    margin-bottom: 20px;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    color: blue; }*/ */
  
body{
    color: brown;
    border-color: blue;
    box-shadow: 2rem;
    text-align: center;
    border-bottom: 3rem;
    border-style: dotted;
    transition: all;


}
body.title{
       background-color: blue;
}

