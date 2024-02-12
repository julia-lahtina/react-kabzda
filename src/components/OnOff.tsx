import React from 'react';

export type OnOffPropsType = {
    // on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    let on = false

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "2px",
        backgroundColor: on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {on = true}}>On</div>
            <div style={offStyle} onClick={() => {on = false}}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
