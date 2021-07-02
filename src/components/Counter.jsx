import { useStore } from 'effector-react';
import { $count, increment, decrement, clearCount } from '../models/modelCount';

const Counter = () => {

    const count =  useStore($count)
    
    return (
        <div>
            <h3><b>Count: </b>{count}</h3>

            <button onClick={()=>{increment(1)}}>+</button>
            <button onClick={()=>{decrement(1)}}>-</button>
            <button onClick={()=>{clearCount()}}>del</button>
        </div>
    );
}

export default Counter;
