import {AccordionTitle} from '../AccordionTitle';
import {AccordionBody} from '../AccordionBody';
import React from 'react';

export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items: ItemType[] // массив стрингов, эквивалент --> Array<string>
    onClick1: (value: any) => void
}
export const Accordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')

    return (
        <div>
            <AccordionTitle onClick={props.onClick} collapsed={props.collapsed} title={props.title}/>
            {!props.collapsed && <AccordionBody onClick1={props.onClick1} items={props.items}/>}
        </div>
    )

    /*    if (props.collapsed) {
            return (
                <div>
                    <AccordionTitle title={props.title}/>
                </div>
            )
        } else {
            return (
                <div>
                    <AccordionTitle title={props.title}/>
                    <AccordionBody/>
                </div>
            )
        }*/
}