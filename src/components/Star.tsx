import React from 'react';

type StarPropsType = {
    value: 1 | 2 | 3 | 4 | 5
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}
export const Star = (props: StarPropsType) => {
    console.log("Star rendering")
    debugger

    return <span onClick={() => {props.setValue(props.value)}}>{props.selected ? <b>star </b> : 'star '}</span>  //star пишем в кавычках, т.к. находимся внутри JS - если писать без
    //кавычек, то для JS это как переменная и будет ошибка, т.к. такой переменной у нас нет
};
