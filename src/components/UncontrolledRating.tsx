import {Star} from "./Star";
import React, {useState} from "react";

type RatingPropsType = {
    //value: number
}
export const UncontrolledRating = (props: RatingPropsType) => {

    let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
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