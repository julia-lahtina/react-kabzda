import React, {useCallback, useState} from 'react';

export default {
    title: 'useCallback'
}

type Ex1Type = {
    handleClickCounter: () => void
    counter: number
}
export const Ex1 = (props: Ex1Type) => {
    console.log('Counter')
    return <>
        <button onClick={() => props.handleClickCounter()}>click me</button>
        <span>{props.counter}</span>
    </>
}

const Example1 = React.memo(Ex1)

export const useCallbackExample = () => {

    console.log('BUTTON')

    const [counter, setCounter] = useState(0)
    const [button, setButton] = useState('nix')

    const addUseCallback = useCallback(() => {
        setButton(button + ' + BUTTON')
    }, [button])

    const handleClickCounter = useCallback(() => {
        setCounter(counter + 2)
    }, [counter])


    return (
        <>
            <Example1 handleClickCounter={handleClickCounter} counter={counter}/>
            <button onClick={addUseCallback}>add me</button>
            <hr/>
            <span>{button}</span>
        </>
    )
}
