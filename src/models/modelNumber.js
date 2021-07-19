import { createEvent, createStore } from "effector";


export const addnewNumber = createEvent()
export const clearNumber = createEvent()


export const $numbers = createStore([1, 2, 3, 4, 5, 6, 7, 8])
.on(addnewNumber, (state)=>[...state, state.length + 1])
.reset(clearNumber)



