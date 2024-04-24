import {Clock} from './Clock';
import {useState} from 'react';


export default {
    title: 'Clock',
    component: Clock
}

export const BaseAnalogExample = () => {

    return (
        <Clock mode={'analog'}/>
    )
}
export const BaseDigitalExample = () => {

    return (
        <Clock mode={'digital'}/>
    )
}

export const ClockToggleExample = () => {

    const [digState, setDigState] = useState(false)
    const [analogState, setAnalogState] = useState(false)

    const handleClickDigitalMode = () => {
        setDigState(!digState)
        setAnalogState(false)
    }

    const handleClickAnalogMode = () => {
        setAnalogState(!analogState)
        setDigState(false)
    }

    return (
        <>
            {digState && <Clock mode={'digital'}/>}
            {analogState && <Clock mode={'analog'}/>}


                <button
                    style={{
                        marginTop: '20px',
                        backgroundColor: 'blue',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        height: '30px',
                        color: 'white',
                        marginRight: '20px'
                    }}
                    onClick={handleClickDigitalMode}
                >
                    digital mode
                </button>
                <button
                    style={{
                        marginTop: '20px',
                        backgroundColor: 'blue',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        height: '30px',
                        color: 'white'
                    }}
                    onClick={handleClickAnalogMode}
                >
                    analog mode
                </button>
        </>
    )
}
