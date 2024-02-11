import React from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Star} from "./components/Star";
import {Title} from "./components/Title";
import {AccordionTitle} from "./components/AccordionTitle";
import {AccordionBody} from "./components/AccordionBody";

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
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

export default App;
