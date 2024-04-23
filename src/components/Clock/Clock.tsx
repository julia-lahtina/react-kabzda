import * as React from 'react';
import {useEffect, useState} from 'react';
import s from './clockStyle.module.css'


type ClockPropsType = {}

// Это утилитная, т.е. вспомогательная функция
const get2digitsString = (number: number) => number < 10 ? '0' + number : number // функция не зависит от стейтов и юзэффектов, поэтому выносим сюда наверх


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

    return (

        <div>

            <div className={s.timeWrapper}>
                <span>{get2digitsString(date.getHours())}</span>
                :
                <span>{get2digitsString(date.getMinutes())}</span>
                :
                <span>{get2digitsString(date.getSeconds())}</span>
            </div>
        </div>
    );
};