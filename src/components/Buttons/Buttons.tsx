import React, {useState} from 'react';
import {Button} from "./Button";
import s from './Buttons.module.css'

type ButtonsPropsType = {
    maxValue: number
    startValue: number
    changeCount: () => void
    resetCount: () => void
    count: number
}

const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.btn}>
            <Button title="inc" onclick={props.changeCount} disabled={props.count === props.maxValue}/>
            <Button title="reset" onclick={props.resetCount} disabled={props.count === props.startValue}/>
        </div>
    )
}

export default Buttons;