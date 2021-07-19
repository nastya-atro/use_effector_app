import React from "react";
import { createReflect } from '@effector/reflect';
import { createEvent, restore } from 'effector';
import { Box, theme } from "@chakra-ui/react";

const changeName = createEvent()
const $name = restore(changeName, '')

const changeAge = createEvent()
const $age = restore(changeAge, 0);

const submit = createEvent();

const Input = ({ value, onChange }) => {
    return <input value={value} onChange={onChange} />;
};
export const reflectInput = createReflect(Input);


const Button = ({ onClick, children, title }) => {
    return (
        <button onClick={onClick} title={title}>
            {children}
        </button>
    );
};
export const reflectButton = createReflect(Button);


const Name = reflectInput({
    value: $name,
    onChange: (event) => changeName(event.target.value),
});

const Age = reflectInput({
    value: $age,
    onChange: (event) => changeAge(event.target.value),
});


const Submit = reflectButton({
    onClick: () => submit(),
});


const Ex4Reflect = () => {

    return (
        <div>
            <Box bg='red.100' p={2} >
                <Name />
                <Age />
                <Submit title="Save left">Save left</Submit>
                <div>
                <Submit title="Save right">Save right</Submit>
                </div>
                
            </Box>
        </div>
    );
}

export default Ex4Reflect;


