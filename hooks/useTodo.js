import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);
    
    const handleNewTodo = (todo) =>{
        const action = {
            type:'[TODO] add todo',
            payload:todo
        }

        dispatch(action);
    };

    const handleTodoDelete = (id) => {
        dispatch({
            type:'[TODO] delete todo',
            payload:id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type:'[TODO] toggle todo',
            payload:id
        })
    };

  return {
    todos,
    handleNewTodo,
    handleTodoDelete,
    handleToggleTodo,
    todosCount:todos.length,
    pendingTodosCount: todos.filter(todo=>!todo.done).length
  }
}
