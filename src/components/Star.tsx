import React from 'react';
import {RatingValuePropsType} from './Rating';

type StarPropsType = {
    value: RatingValuePropsType
    selected: boolean
    onClick: (value: RatingValuePropsType) => void
}
export const Star = (props: StarPropsType) => {
    console.log("Star rendering")

    return <span onClick={() => {props.onClick(props.value)}}>{props.selected ? <b>star </b> : 'star '}</span>  //star пишем в кавычках, т.к. находимся внутри JS - если писать без
    //кавычек, то для JS это как переменная и будет ошибка, т.к. такой переменной у нас нет
};
