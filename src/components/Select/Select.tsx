import React from 'react';
import s from './Select.module.css'


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div className={`${s.select} ${s.active}`}>
            <h3>{selectedItem && selectedItem.title}</h3>
            <div className={s.item}>
                {props.items.map(i => <div key={i.value}>{i.title}</div>)}
            </div>
        </div>
    )
}