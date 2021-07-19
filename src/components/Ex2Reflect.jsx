import { Box } from "@chakra-ui/react";
import { variant } from "@effector/reflect";
import { createEvent, createStore } from "effector";


const $fieldType = createStore('string');
const valueChanged = createEvent();
const $value = createStore('');

const Input = ({ value, onChange, placeholder }) => {
    return <input value={value} onChange={onChange} placeholder={placeholder} />;
};

const DateSelector = '222'


const Ex2Rflect = () => {

    const Field = variant({
        source: $fieldType,
        bind: { onChange: valueChanged, value: $value },
        cases: {
          date: DateSelector,
          number: Range,
        },
        default: Input,
      });


    return (
        <Box bg='pink.100' p={2}>
            <Field />
        </Box>

    );
}

export default Ex2Rflect;
