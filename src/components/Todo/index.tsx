import { TodosProps } from "../../App"

import './styles.css';

type TodoProps ={ 
    todo:TodosProps
    completedTodo:(id:number)=>void;
    deleteTodo:(id:number)=>void;
}


export const Todo = ({todo, completedTodo, deleteTodo}:TodoProps) => {


    function handleComplete(){
        completedTodo(todo.id);
    }
    function handleDelete(){
        deleteTodo(todo.id);
    }
    return(
        <div className={`container-todo ${todo.completed ? 'done' :''}`}>
            <h3>{todo.title}</h3>
           
        
            <div className="buttons">
                <button className="complete" onClick={handleComplete}>Completar</button>
                <button className="delete" onClick={handleDelete}>Deletar</button>
            </div>
           
        </div>
    )
}