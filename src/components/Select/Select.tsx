import React, {useState, KeyboardEvent} from 'react';
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

    const [active, setActive] = useState(false)
    const [hoveredValue, setHoveredValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredValue)


    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        setActive(!active)
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

    }


    return (
        <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={s.main} onClick={toggleItems}>
                {selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(i => <div
                        className={`${s.item} ${hoveredItem === i ? s.selected : ''}`}
                        onMouseEnter={() => {setHoveredValue(i.value)}}
                        onClick={() => {
                            onItemClick(i.value)
                        }} key={i.value}>{i.title}</div>)}
                </div>
            }

        </div>
    )
}