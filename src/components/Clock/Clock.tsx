import * as React from 'react';
import {useEffect, useState} from 'react';
import s from './clockStyle.module.css'
import clock1 from './clock-digital.svg'
import clock2 from './clock.svg'
import clockAnalog from './clockMain.svg'

type ClockPropsType = {}

// Это утилитная, т.е. вспомогательная функция
const get2digitsString = (number: number) => number < 10 ? '0' + number : number // функция не зависит от стейтов и юзэффектов, поэтому выносим сюда наверх


export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date())
    const [digClock, setDigClock] = useState(false)
    const [analogClock, setAnalogClock] = useState(false)

    const handleClickDigClock = () => {
        setDigClock(!digClock)
    }

    const handleClickAnalogClock = () => {
        setAnalogClock(!analogClock)
    }


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

            {digClock && <div className={s.timeWrapper}>
                    <span>{get2digitsString(date.getHours())}</span>
                    :
                    <span>{get2digitsString(date.getMinutes())}</span>
                    :
                    <span>{get2digitsString(date.getSeconds())}</span>
                </div>
            }

            {analogClock && <div className={s.timeWrapper}>
                <img className={s.clockImg} src={clockAnalog} alt="analog clock"/>
                <div className={s.imgM}></div>
                <div className={s.hours}></div>
                <div className={s.min}></div>
                <div className={s.sec}></div>
            </div>}


            <div className={s.buttonWrapper}>
                <button className={s.button} onClick={handleClickDigClock}>
                    <img src={clock1} alt="dig-clock"/>
                </button>

                <button className={s.button} onClick={handleClickAnalogClock}>
                    <img src={clock2} alt=""/>
                </button>
            </div>
        </div>
    );
};