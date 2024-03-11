import React, {useRef, useState} from 'react';
import { action } from '@storybook/addon-actions';


export default {
    title: 'input ',
    //component: input,
};


export const UncontrolledInput = () => <input />
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
        <><input ref={inputRef}/> <button onClick={showMeInputValueHandler}>show me input value</button> actuall value - {value}</>
    )
}
export const ControlledInput = () => <input value={'hello'}/>