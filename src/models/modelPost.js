import { createEvent, createStore } from "effector";

export const addPost = createEvent()
export const deletePost = createEvent()
export const deleteAllPost = createEvent()

export const $post = createStore([
    {id: 1, name: 'Nastya', text: 'Hi'},
    {id: 2, name: 'Makim', text: 'Yooo'},
])
.on(addPost, (state, post)=>[...state, post])
.on(deletePost, (state, id)=>state.filter((s)=>s.id !==id))
.reset(deleteAllPost)