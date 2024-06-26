import * as React from 'react';
import {ClockViewPropsType} from './Clock';


// Это утилитная, т.е. вспомогательная функция
const get2digitsString = (number: number) => number < 10 ? '0' + number : number
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}