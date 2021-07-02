import { useCallback, useRef } from "react";
import { useStore } from 'effector-react';
import { $numbers } from "../models/modelNumber";
import { addnewNumber } from './../models/modelNumber';


const NumberScroll = () => {
    const number = useStore($numbers)

    const ulRef = useRef()
    const numbersRef = useRef()
    numbersRef.current = number

    const handleScroll = useCallback(() => {
        console.log('scroll', numbersRef.current)
    }, [])

    const addScroll = () => {
        ulRef.current.addEventListener('scroll', handleScroll)
    }

    const removeScroll = () => {
        ulRef.current.removeEventListener('scroll', handleScroll)
    }


    return (
        <div>
            <ul ref={ulRef} style={{ height: '100px', overflowY: 'auto' }}>{number.map((n) => <li key={n}>
                <div>{n}</div>
            </li>)}
            </ul>

            <button onClick={() => { addnewNumber() }}>+</button>

            <div>
                <button onClick={addScroll}>следить</button>
                <button onClick={removeScroll}>не следить</button>
            </div>
        </div>
    );
}

export default NumberScroll;
