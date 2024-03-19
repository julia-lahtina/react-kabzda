import React from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from './Select';


export default {
    title: 'select ',
    component: Select,
};

export const WithValue = () => {
    return (
        <>
            <Select
            value={'2'}
            onChange={action('new value')}
            items={[
                {title: 'Minsk', value: '1'},
                {title: 'Omsk', value: '2'},
                {title: 'Lübeck', value: '3'},
            ]}/>
        </>
    )
}

export const WithoutValue = () => {
    return (
        <>
            <Select
                onChange={action('new value')}
                items={[
                    {title: 'Minsk', value: '1'},
                    {title: 'Omsk', value: '2'},
                    {title: 'Lübeck', value: '3'},
                ]}/>
        </>
    )
}







