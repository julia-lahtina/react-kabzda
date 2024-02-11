import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Star} from "./components/Star";
import {Title} from "./components/Title";

function App() {
    return (
        <div className="App">
            <Title/>
            <Rating/>
            <Accordion/>
            <Rating/>
            <Button title={"ON"} isOn={true}/>
            <Button title={"OFF"} isOn={false}/>
        </div>
    );
}

function Rating() {
    return(
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Accordion() {
    return (
        <div>
            <h3>Menü</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
