import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";
import React, {useState} from "react";

export type AccordionPropsType = {
    title: string
   // collapsed?: boolean
}
export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title}/> <button onClick={() => {setCollapsed(true)}}>TOGGLE</button>
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