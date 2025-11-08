import { useState } from "react";
import { Button } from "react-bootstrap";

function StateCounter() {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return <div>
        <h1>Counter : {counter} </h1>
        <Button variant="success" onClick={handleIncrement}>Increment</Button>
        <Button variant="light" onClick={handleDecrement}>Decrement</Button>
    </div>
}

export default StateCounter;