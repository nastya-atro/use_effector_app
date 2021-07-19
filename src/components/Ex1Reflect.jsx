import React, { useState } from "react";
import { reflect } from '@effector/reflect';
import { createEvent, restore } from 'effector';
import { Box } from "@chakra-ui/react";
import { useStore } from "effector-react";

const changeName = createEvent()
const $name = restore(changeName, '')

const changeAge = createEvent()
const $age = restore(changeAge, 0);

const inputChanged = (event) => {
    return event.currentTarget.value;
  };

const Input = ({ value, onChange, placeholder }) => {
    return <input value={value} onChange={onChange} placeholder={placeholder} />;
};

const Name = reflect({
    view: Input,
    bind: {
        value: $name,
        onChange: changeName.prepend(inputChanged),
    },
});
const Age = reflect({
    view: Input,
    bind: {
        value: $age,
        onChange: changeAge.prepend(parseInt).prepend(inputChanged),
    },
});

const AboutMe = () => {
    
    const name = useStore($name)
    const [value, setValue] = useState('')

    return (
        <Box bg='blue.100' p={2}>

            <Name placeholder="Name" />
            <Age placeholder="Age" />

            <button onClick={()=>{setValue(name)}}>Click</button>

            <div>{value}</div>

        </Box>
    );
}

export default AboutMe;


