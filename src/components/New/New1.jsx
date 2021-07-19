import { Box } from "@chakra-ui/react";
import { useStore } from "effector-react";
import { useState } from "react";
import { $namee, addName} from "../../models/model1";

const New1 = () => {
    const name = useStore($namee)
    const [value, setValue] = useState('')

    const send = (e) => {
        e.preventDefault();
        addName({ id: Date.now(), name: value })
    }

    return (
        <Box bg='yellow.100' p={2}>
            <form>
                <input placeholder='Your name...' onChange={(e) => { setValue(e.target.value) }} value={value} />

                <button onClick={send}>Send</button>
            </form>
            <div>{name.map((n) => <div key={n.id}>{n.name}</div>)}</div>
        </Box>
    );
}

export default New1;
