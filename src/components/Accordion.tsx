import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React from "react";

export type AccordionPropsType = {
    title: string
}
export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}