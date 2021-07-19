import { Box, Button } from "@chakra-ui/react";
import {  variant } from "@effector/reflect";
import axios from "axios";
import { combine, createEffect, createStore } from "effector";
import { useStore } from "effector-react";

const getTodosAsync = createEffect()
getTodosAsync.use(async () => {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
    return result.data
})

const $todos = createStore([])
    .on(getTodosAsync.doneData, (state, todos) => [...state, ...todos])

const $isLoading = getTodosAsync.pending
const $isEmpty = $todos.map((t) => t.length === 0)


const Ex2Rflect = () => {

    const todos = useStore($todos)


    return (
        <div>
            <h3>Todos</h3>

            {todos.map((t) => <div>{t.id}</div>)}

            <Button bg='pink' p={5} onClick={() => { getTodosAsync() }}>Fetch todos</Button>

        </div>

    );
}

export default Ex2Rflect;



export const PageContent = variant({
    source: combine(
        {
            isLoading: $isLoading,
            isEmpty: $isEmpty,
        }, ({ isLoading, isEmpty }) => {
            if (isLoading) return "loading";
            if (isEmpty) return "empty";
            return "ready";
        }
    ),
    cases: {
        loading: () => <div>Loading...</div>,
        ready: Ex2Rflect,
    },
    default: Ex2Rflect
});


