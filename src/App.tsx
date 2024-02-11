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
            <Rating value={3}/>
            <Accordion/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <Button title={"ON"} isOn={true}/>
            <Button title={"OFF"} isOn={false}/>
        </div>
    );
}

export default App;
