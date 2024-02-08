import React from 'react';

export type ButtonPropsType = {
    title: string
    isOn: boolean
}


export const Button = ({title, isOn}: ButtonPropsType) => {
    debugger
    return (
        <>
            <button style={{backgroundColor: "green"}}>{title} {isOn}</button>
            {!isOn && <button style={{backgroundColor: "red"}}>{title} {isOn}</button>}
        </>
    )

};

