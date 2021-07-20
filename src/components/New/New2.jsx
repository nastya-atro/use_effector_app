import { Box } from "@chakra-ui/react";
import { reflect } from "@effector/reflect";
import { useStore } from "effector-react";
import { useState } from "react";
import { $userName, addName} from "../../models/model1";

const Input = ({ value, onChange, placeholder }) => {
    return <input value={value} onChange={onChange} placeholder={placeholder} />;
};

const inputChanged = (event) => {
    return event.currentTarget.value;
};

const Name = reflect({
    view: Input,
    bind: {
        value: $userName,
        onChange: addName.prepend(inputChanged)
    },
})

export const New2 = () => {

    const userName = useStore($userName)

    const [value, setValue]=useState('')

    return (
        <Box bg='blue.100' p={2}>
            <h3>New2</h3>
         
                <Name />
                <button onClick={()=>{setValue(userName)}}>Send</button>
                <div>{value}</div>
                
        </Box>
    );
}