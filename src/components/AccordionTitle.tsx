import React from 'react';
import {AccordionBody} from './AccordionBody';

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
export const AccordionTitle = (props: AccordionTitlePropsType) => {
    debugger
    return <h3 onClick={() => props.onClick(!props.collapsed)}>
        --- {props.title} ---
    </h3>;
};
