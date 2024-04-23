import * as React from 'react';
import {useEffect, useState} from 'react';
import {AnalogClockView} from './AnalogClockView';
import {DigitalClockView} from './DigitalClockView';


type ClockPropsType = {
    mode?: 'digital' | 'analog' | undefined
}


export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date())


    useEffect(() => {
        let intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, []);


    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>;
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }


    return (
        <div>
            {view}
        </div>
    );
};


export type ClockViewPropsType = {
    date: Date
}

