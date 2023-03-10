import React, { useState } from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate from "../logic/calculate";
import "./App.css";

const initialState = {
    total: null,
    next: null,
    operation: null,
};

const App = () => {
    const [state, setstate] = useState(initialState);

    const handleClick = (buttonName) => {
        setstate((prevState) => {
            return calculate(prevState, buttonName);
        });
    };

    return (
        <div className="component-app">
            <Display value={state.next || state.total || "0"} />
            <ButtonPanel clickHandler={handleClick} />
        </div>
    );
};

export default App;
