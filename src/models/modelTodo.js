import { createEvent, createStore } from 'effector';
import { createEffect } from 'effector';
import axios from 'axios';

export const addTodo = createEvent()
export const clearTodos = createEvent()

export const getTodosAsync = createEffect()
getTodosAsync.use(async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    return result.data
})

export const $todos = createStore([])
    .on(addTodo, (state, todo) => [...state, todo])
    .on(getTodosAsync.doneData, (state, todos) =>[...state, ...todos])
    .reset(clearTodos)

getTodosAsync.done.watch(({result, params})=>{
    console.log(params)
    console.log(result)
})

getTodosAsync.fail.watch(({error, params})=>{
    console.log(error)
    console.log(params)
})