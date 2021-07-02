import { createEvent, createStore } from 'effector';


export const increment = createEvent()
increment.watch(number =>console.log(`Increment on ${number}`))

export const decrement = createEvent()
decrement.watch(number =>console.log(`Decrement on ${number}`))

export const clearCount = createEvent()
clearCount.watch(()=>console.log(`Clear all`))

export const $count = createStore(0)
    .on(increment, (state, number) => state + number)
    .on(decrement, (state, number) => state - number)
    .reset(clearCount)



