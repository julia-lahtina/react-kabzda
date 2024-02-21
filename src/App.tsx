import React, {useState} from 'react';
import './App.css';
import {Title} from './components/Title';
import {Accordion} from './components/Accordion';
import {UncontrolledAccordion} from './components/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating';
import {Rating, RatingValuePropsType} from './components/Rating';
import {OnOff, OnOffPropsType} from './components/OnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    let [accordCollapsed, setAccordCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState<boolean>(false) // hook

    return (
        <div className="App">

            <Accordion title={'MENÜ'} collapsed={accordCollapsed} onClick={setAccordCollapsed}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <OnOff valueOnOff={on} onChange={setOn}/>

            {/*<Title title={"This is APP component"}/>
            <Rating value={3}/>*/}
            {/*            <Accordion title={"Menü"} collapsed={true}/>
            <Accordion title={"Films"} collapsed={false}/>*/}

            {/*            <UncontrolledAccordion title={"Version 1"}/>
            <UncontrolledAccordion title={"Version 2"}/>*/}

            {/*<UncontrolledRating/>*/}


            {/*            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            {/*            <OnOff/>*/}
            {/*            <OnOff/>
            <OnOff/>
            <OnOff/>*/}

        </div>
    );
}

export default App;
