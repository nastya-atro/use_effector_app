import { createEvent, createStore, restore } from "effector";

//variant 1
export const addName = createEvent()

export const $namee = createStore([
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' }
]).on(addName, (state, post) => [...state, post])


//variant 2

export const $userName = restore(addName, 'nastya')

//variant 3

export const $userName1 = restore(addName, [
    { id: 1, name: 'aaa' },
    { id: 2, name: 'bbb' }])


