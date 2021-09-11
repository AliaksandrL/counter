import React, {useState} from 'react';
import './../../App.css'

type ButtonPropsType = {
    title: string
    onclick: () => void
    disabled: boolean
}


export const Button = (props: ButtonPropsType) => {
    return (
        <button className={'button'} onClick={props.onclick} disabled={props.disabled}>{props.title}</button>
    )
}