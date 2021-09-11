import React from "react";
import s from './Display.module.css'

type DisplayPropsType = {
    count: number
    maxValue: number
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={s.display}>
            <span className={props.count === props.maxValue ? s.textRed : s.text}>{props.count}</span>
        </div>
    )
}