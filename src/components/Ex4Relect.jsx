import React from "react";
import { createReflect } from '@effector/reflect';
import { createEvent, restore } from 'effector';
import { Box, Button, theme } from "@chakra-ui/react";

const changeName = createEvent()
const $name = restore(changeName, '')

const changeAge = createEvent()
const $age = restore(changeAge, 0);

const submit = createEvent();

const Input = ({ value, onChange, placeholder }) => {
    return <input value={value} onChange={onChange} placeholder={placeholder} />;
}
export const reflectInput = createReflect(Input);


const Buttonn = ({ onClick, children, title }) => {
    return (
        <div>
            <Button bg='white' p={5} onClick={onClick} title={title}>
                {children}
            </Button>
        </div>
    );
};
export const reflectButton = createReflect(Buttonn);


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
                <Name placeholder='Name' />
                <Age placeholder='Age' />

                <Submit title="Save left">Save left</Submit>

                <Submit title="Save right">Save right</Submit>
            </Box>
        </div>
    );
}

export default Ex4Reflect;


