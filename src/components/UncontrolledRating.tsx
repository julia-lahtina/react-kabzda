import {Star} from "./Star";
import React, {useState} from "react";

type RatingPropsType = {
    //value: number
}
export const UncontrolledRating = (props: RatingPropsType) => {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <button>1</button>
            <Star selected={value > 1}/>
            <button>2</button>
            <Star selected={value > 2}/>
            <button>3</button>
            <Star selected={value > 3}/>
            <button>4</button>
            <Star selected={value > 4}/>
            <button>5</button>
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