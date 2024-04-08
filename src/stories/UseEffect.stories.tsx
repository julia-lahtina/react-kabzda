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