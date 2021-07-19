import { Box } from "@chakra-ui/react";
import { reflect } from "@effector/reflect";
import { useState } from "react";
import { $userName, addName} from "../../models/model1";


export const New2 = () => {

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

    

    const [value, setValue]=useState('')
   // const name = useStore($userName)


    return (
        <Box bg='blue.100' p={2}>
         
                <Name />
                <button>Send</button>
                <div></div>
                
           
        </Box>
    );
}