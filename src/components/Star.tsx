import React from 'react';

type StarPropsType = {
    selected: boolean
    onClick: () => void
}
export const Star = (props: StarPropsType) => {
    console.log("Star rendering")
    debugger

    return (
        props.selected ? <span><b>star</b> </span> : <span>star </span>
    )

};
