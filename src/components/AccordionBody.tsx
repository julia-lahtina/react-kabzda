import React from 'react';
import {ItemType} from './Accordion/Accordion';

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick1: (value: any) => void
}
export const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((el, index) => {
                return (
                    <li onClick={() => {props.onClick1(el.value)}} key={index}>{el.title}</li>
                )
            })}
        </ul>
    );
};
