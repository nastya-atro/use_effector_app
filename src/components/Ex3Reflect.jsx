import { Box } from "@chakra-ui/react";
import { list } from "@effector/reflect";
import { createStore } from "effector";

const $color = createStore('red');

const $users = createStore([
    { id: 1, name: 'Yung' },
    { id: 2, name: 'Lean' },
    { id: 3, name: 'Kyoto' },
    { id: 4, name: 'Sesh' },
]);


const Item = ({ id, name, color }) => {
    return (
        <li style={{ color }}>
            {id} - {name}
        </li>
    );
};
export const Ex3Reflect = () => {
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

    return (
        <Box bg='yellow.100' p={2}>
            <Items />
        </Box>

    )

}

