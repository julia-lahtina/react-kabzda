import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>

export const FirstStory: Story = {
    args: {
        title: 'hello',
        collapsed: true,
    }
}

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return (
        <Accordion
            title={'Collapsed Accordion'}
            collapsed={true}
            onClick={onChangeHandler}
            />
    )
}

export const OpenedAccordion = () => {
    return (
        <Accordion
            title={'Opened Accordion'}
            collapsed={false}
            onClick={() => {}}
        />
    )
}


export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Accordion
            title={'Accordion Demo'}
            collapsed={collapsed}
            onClick={() => {setCollapsed(!collapsed)}}
        />
    )
}