import React, {useState} from 'react';

export type OnOffPropsType = {
    valueOnOff: boolean
    onChange: (valueOnOff: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
    console.log("OnOff rendering")

    console.log("on: " + props.valueOnOff)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.valueOnOff ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "2px",
        backgroundColor: !props.valueOnOff ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.valueOnOff ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
