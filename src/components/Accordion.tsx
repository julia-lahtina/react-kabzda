import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed?: boolean
}
export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")

    return (
        <div>
            <AccordionTitle onClick={() => {}} title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
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