import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
};

const callback = action('clicked');

export const OnMode = () => <OnOff valueOnOff={true} onChange={callback}/>
export const OffMode = () => <OnOff valueOnOff={false} onChange={callback}/>
export const ModeChanging = () => {

    const [value, setValue] = useState<boolean>(false);

    return (
        <OnOff valueOnOff={value} onChange={setValue}/>
    )
}



