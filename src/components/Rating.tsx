import {Star} from "./Star";
import React from "react";

export const Rating = () => {
    return(
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}