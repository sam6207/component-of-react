import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {
        console.log(todo);
    },
    updateTodo: (id, todo) => {
        console.log(todo);
    },
    deleteTodo: (id) => {
        console.log(id);
    },
    toggleComplete: (id) => {
        console.log(id);
    }
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider