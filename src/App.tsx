import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Title} from "./components/Title";
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";

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

export default App;
