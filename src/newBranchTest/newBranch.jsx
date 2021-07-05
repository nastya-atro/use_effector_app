import { useStore } from 'effector-react';
import { $count, increment, decrement, clearCount } from '../models/modelCount';

const newBranch = () => {

    const count =  useStore($count)
    
    return (
        <div>
            Here I testing the branches in the project
        </div>
    );
}

export default newBranch;
