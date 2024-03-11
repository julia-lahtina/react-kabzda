import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import {useState} from 'react';

export default {
    component: Accordion,
};



const onChangeHandler = action('onChange')
const onClickCallback = action('some item was clicked')

export const CollapsedAccordion = () => {
    return (
        <Accordion
            title={'Collapsed Accordion'}
            onClick1={onClickCallback}
            collapsed={true}
            onClick={onChangeHandler}
            items={[]}
            />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion
            title={'Opened Accordion'}
            onClick1={onClickCallback}
            collapsed={false}
            onClick={() => {}}
            items={[{title: 'Dima', value: 1}, {title: 'Lera', value: 2}, {title: 'Bob', value: 3}]}
        />
    )
}


export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Accordion
            title={'Accordion Demo'}
            onClick1={(id) => {alert(`user with ID ${id} should be happy`)}}
            collapsed={collapsed}
            onClick={() => {setCollapsed(!collapsed)}}
            items={[{title: 'Dima', value: 1}, {title: 'Lera', value: 2}, {title: 'Bob', value: 3}]}
        />
    )
}