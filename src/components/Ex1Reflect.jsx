import React from "react";
import { reflect } from '@effector/reflect';
import { createEvent, restore } from 'effector';
import { Box } from "@chakra-ui/react";

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

const AboutMe = () => {

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

    return (
        <Box bg='blue.100' p={2}>

            <Name placeholder="Name" />
            <Age placeholder="Age" />

            <div>...</div>

        </Box>
    );
}

export default AboutMe;


