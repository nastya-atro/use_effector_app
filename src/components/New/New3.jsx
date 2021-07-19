import { Box } from "@chakra-ui/react";
import { reflect } from "@effector/reflect";
import { useStore } from "effector-react";
import { useState } from "react";
import {addName, $userName1} from "../../models/model1";


export const New3 = () => {

    const Input = ({ onChange, placeholder }) => {
        return <input  onChange={onChange} placeholder={placeholder} />;
    };

    const inputChanged = (event) => {
        return event.currentTarget.value;
    };

    const Name = reflect({
        view: Input,
        bind: {
            value: $userName1,
            onChange: addName.prepend({ id: Date.now(), name: inputChanged })
        },
    })

    const [value, setValue]=useState('')
    const name = useStore($userName1)


    return (
        <Box bg='green.100' p={2}>
         
                <Name />
                <button onClick={()=>{setValue(name)}}>Send</button>
                <div>{value}</div>
                
           
        </Box>
    );
}


