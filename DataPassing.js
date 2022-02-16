//App.js

import React from 'react'
import Home from './SATET_LIFTING/Home'


 export default function App() {
  
  return(
    
        <div>
      <Home/>
      
    </div>
  )
  }
////Home.js

import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from '.NewTodo/'

const dummyTodos = ["todo1" , "todo2"]
function Home() {
const Home = () => {
    const [todos, setTodos] = useState(dummyTodos);
} 
  
  return (
    <div>
        <NewTodo/>
      <Todos todos ={todos}/>
    </div>
  )
}

export default Home
///NewTodo.js

import React, { useState } from 'react'

function NewTodo() {

    const [todo, setodo] = useState("");

    const handleInputChange = (e) => {
        setodo(e.taget.value);

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(todo);
        } 

    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo"> NewTodo</label>
        <input type ="text" id="todo" name="todo" value = {todo} onChange={handleInputChange}/>
        <button> Add Todo</button>
    </form>
  )
}
export default NewTodo
//todos.js


import React from 'react'

function todos(props) {
    console.log(props.todos);
  return (
    <div>
      {props.todos.map((todo, index) =>(
         <todo todo ={todo}/>
        
         ))   }
    </div>
  )
}

export default todos

///todo.js

import React from 'react'

function Todo() {
  return (
  
      <p> {props.todo} </p>
    
  )
}

export default Todo


