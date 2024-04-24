import {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('simple example')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()
    }, [counter]);


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}

export const SetTimeOutExample = () => {

    const [counter, setCounter] = useState(1)
    const [time, setTime] = useState(new Date())

    console.log('setTimeOut example')

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, []);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, []);


    return <>
        <div>Hello, counter: {counter}</div>
        <span>Текущее время: {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}</span>
    </>
}

export const ClearIntervalExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('simple example')

    useEffect(() => {
        const id = setInterval(() => {
            console.log(counter + ' ' + 'interval works')
        }, 1000)
        console.log(id)
        return () => {
            clearInterval(id)
        }
    }, [counter]);


    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}
