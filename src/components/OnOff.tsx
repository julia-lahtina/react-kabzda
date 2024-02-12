import React from 'react';

export type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        padding: "2px"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display:"inline-block",
        marginLeft: "3px",
        padding: "2px"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        display:"inline-block",
        marginLeft: "5px"
    };

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
