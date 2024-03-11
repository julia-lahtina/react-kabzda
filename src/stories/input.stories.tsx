import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    title: 'input ',
    //component: input,
};


export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');


    return (
        <><input onChange={(event) => {
            const inputValue = event.currentTarget.value;
            setValue(inputValue)
        }}/> -{value}</>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)

    const showMeInputValueHandler = () => {
        const inputElement = inputRef.current as HTMLInputElement;
        setValue(inputElement.value)
    }

    return (
        <><input ref={inputRef}/>
            <button onClick={showMeInputValueHandler}>show me input value</button>
            actuall value - {value}</>
    )
}

export const ControlledInput = () => {

    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <>
            <input value={value} onChange={onChangeHandler} type="text"/>
            actuell value - {value}
        </>
    )
}

export const ControlledCheckBox = () => {
    const [value, setValue] = useState(true);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <input onChange={onChangeHandler} checked={value} type="checkbox"/>
    )
}

export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>('2');
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiew</option>
        </select>
    )
}
export const ControlledInputWithFixedValue = () => <input value={'hello'}/>