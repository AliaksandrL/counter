import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import Buttons from "./components/Buttons/Buttons";

function App() {

    let [count, setCount] = useState(0)
    const maxValue = 5;
    const startValue = 0;

    const changeCount = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(startValue)
    }

    return (
        <div className="App">
            <Display
                count={count}
                maxValue={maxValue}
            />
            <Buttons
                maxValue={maxValue}
                startValue={startValue}
                changeCount={changeCount}
                resetCount={resetCount}
                count={count}
            />
        </div>
    );
}

export default App;
