import React from 'react';

type StarPropsType = {
    selected: boolean
}
export const Star = (props: StarPropsType) => {
    console.log("Star rendering")

    return (
        props.selected ? <span><b>star</b> </span> : <span>star </span>
    )

    /*    if (props.selected) {
            return <span><b>star</b> </span>;
        } else {
            return <span>star </span>
        }*/
};
