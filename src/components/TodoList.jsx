import { useStore } from 'effector-react';
import { $todos, addTodo, clearTodos, getTodosAsync } from '../models/modelTodo';

const TodoList = () => {
   
    const todos = useStore($todos)

    const addNewTodo = () => {
        addTodo({completed: false,
            id: 1,
            title: "delectus aut autem",
            userId: 1})
    }

    const clearAllTodo = () => {
        clearTodos()
    }

    
    return (
        <div>
            
            {todos && todos.map((t, index) => <div key={index}>{t.title}</div>)}

            <button onClick={addNewTodo}>add todo</button>
            <button onClick={clearAllTodo}>clear all</button>
            

            <button onClick={()=>{getTodosAsync()}}>Fetch todos</button>
        </div>
    );
}

export default TodoList;
