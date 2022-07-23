import { useState } from "react"


export const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () => setCounter(counter+1);
    const decrement = () => {
        if(counter===initialValue)return;
        setCounter(counter-1);
    };
    const reset = () => setCounter(initialValue);


    return {
        counter,
        increment,
        decrement,
        reset
    }
}