import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';
import {string} from 'prop-types';


export default {
    title: 'select ',
    component: Select,
};

export const WithValue = () => {

    const [value, setValue] = useState('2')

    return (
        <>
            <Select
                value={value}
                onChange={setValue}
                items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Omsk', value: '2'},
                    {title: 'Lübeck', value: '3'},
                ]}/>
        </>
    )
}

export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
        <>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Omsk', value: '2'},
                    {title: 'Lübeck', value: '3'},
                ]}/>
        </>
    )
}







