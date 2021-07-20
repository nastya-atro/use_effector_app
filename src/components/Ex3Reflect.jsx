import { Box, Button } from "@chakra-ui/react";
import { list } from "@effector/reflect";
import { createEvent, createStore } from "effector";
import { useStore } from "effector-react";
import { useState } from "react";

const $color = createStore('red');
const addUser = createEvent();

const $users = createStore([
    { id: 1, name: 'Yung' },
    { id: 2, name: 'Lean' },
    { id: 3, name: 'Kyoto' },
    { id: 4, name: 'Sesh' },
]).on(addUser, (state, newUser)=>[...state, {id: Date.now(), name: newUser}])


const Item = ({ id, name, color }) => {
    return (
        <li style={{ color }}>
            {id} - {name}
        </li>
    );
};

const Items = list({
    view: Item,
    source: $users,
    bind: {
        color: $color
    },
    mapItem: {
        id: (user) => user.id,
        name: (user) => user.name
    },
});

export const Ex3Reflect = () => {
    const [value, setValue] = useState('')

    return (
        <Box bg='yellow.100' p={2}>
            <Items />
            <input onChange={(e)=>{setValue(e.target.value)}} placeholder='your name'/>
            <Button bg='pink' p={5} onClick={()=>{addUser(value)}}>Add user</Button>
        </Box>
    )
}

