import React from 'react';
import './App.css';
import {Title} from "./components/Title";
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {
    return (
        <div className="App">
            {/*<Title title={"This is APP component"}/>
            <Rating value={3}/>*/}
            <Accordion title={"Menü"} collapsed={true}/>
            <Accordion title={"Films"} collapsed={false}/>

            <UncontrolledAccordion title={"Version 1"}/>
            <UncontrolledAccordion title={"Version 2"}/>

            <UncontrolledRating/>

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>

        </div>
    );
}

export default App;
