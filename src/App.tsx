
import { useState, ChangeEvent, useEffect } from 'react';
import '../src/App.css';
import { Todo } from './components/Todo';


export type TodosProps = { 
  id:number;
  title:string;
  completed:boolean;
}

export default function App(){

  
  const [todoInput, setTodoInput]=useState('')
  const [todos, setTodos]=useState<TodosProps[]>(()=>{
    const storedTodos = localStorage.getItem('@lista-tarefas:todos' )
    if(storedTodos){
      return JSON.parse(storedTodos)
    }
   [] 
  })
  useEffect(() =>{
    
    localStorage.setItem('@lista-tarefas:todos', JSON.stringify(todos))
  },[todos])
  

  console.log(todoInput);

  function changeInput(event: ChangeEvent<HTMLInputElement>){
    setTodoInput(event.target.value)
  }

  function AddTodo(){
    setTodos(prev => [...prev, {id: Math.random(), title:todoInput, completed:false  }])
    setTodoInput('')
  }

  function completedTodo(id:number){
    setTodos((prev)=>prev.map((todo)=>todo.id!==id ? todo : {...todo, completed: !todo.completed}))
  }

  function deleteTodo(id: number){
    setTodos((prev)=>prev.filter(todo => todo.id !== id))
  }


  return(
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="inputs-container">
        <input type="text" value={todoInput} onChange={changeInput}/>
        <button type="button" onClick={AddTodo}>adicionar</button>
      </div>
      <div className='todos-container'>
        
        {
          todos.map((todo)=><Todo key={todo.id} todo={todo} completedTodo={completedTodo} deleteTodo={deleteTodo}/>)
        }
      </div>

    </div>
  )
}