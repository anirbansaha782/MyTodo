import React from 'react'
import TodoItem from './TodoItem'
import AddTodo from './AddTodo';


export default function Todos(props) {
    let myStyle={
        minHeight:"70vh"
    }
    return (
    <>
        <AddTodo addTodo={props.addTodo}/>

        <div className="container my-3" style={myStyle}> 
            <h3 className="text-center">Todos List</h3>
            {props.todos.length===0?<h3>No todos to display</h3>:
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
        </div>
    </>
    )
}
