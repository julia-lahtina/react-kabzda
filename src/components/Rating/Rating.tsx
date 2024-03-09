import {Star} from "../Star";
import React from "react";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValuePropsType
    onClick: (ratingValue: RatingValuePropsType) => void
}



export const Rating = (props: RatingPropsType) => {

    return (
       <div>
            <Star selected={props.value > 0} value={1} onClick={props.onClick}/>
            <Star selected={props.value > 1} value={2} onClick={props.onClick}/>
            <Star selected={props.value > 2} value={3} onClick={props.onClick}/>
            <Star selected={props.value > 3} value={4} onClick={props.onClick}/>
            <Star selected={props.value > 4} value={5} onClick={props.onClick}/>
        </div>
)
    /*    if (props.value === 1) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 2) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 3) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 4) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                </div>
            )
        }
        if (props.value === 5) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                </div>
            )
        }

        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        )*/
}
