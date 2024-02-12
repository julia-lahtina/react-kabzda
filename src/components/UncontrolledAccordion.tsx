import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React from "react";

export type AccordionPropsType = {
    title: string
   // collapsed?: boolean
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")

    const collapsed = true;

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!collapsed && <AccordionBody/>}
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