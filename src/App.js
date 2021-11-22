import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React,{useState,useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("I am on delete",todo);
    setTodos(todos.filter((e)=>{
        return e!==todo
    }));

    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log(title,desc)
    let sno=(todos.length!==0?todos[todos.length-1].sno+1:1);
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);

    console.log(todos);
  }
  const [todos,setTodos]=useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
    {/* <Router> */}
    <Header title="My Todo"/>

    { <BrowserRouter>
      <Routes>
          <Route  path="/about" element={<About/>}/>
          <Route  path="/"  element={<Todos addTodo={addTodo} todos={todos} onDelete={onDelete}/>}/>
         
      </Routes>
      </BrowserRouter> 
      }
    {/* <AddTodo addTodo={addTodo}/> */}
    {/* <Todos addTodo={addTodo} todos={todos} onDelete={onDelete}/> */}
    <Footer/>
    {/* </Router> */}
    </>
  );
}

export default App;


{/* <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/> */}