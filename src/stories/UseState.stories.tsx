import {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}


function generateData() {
    console.log('generating data')
    return 1;
}

export const useStateExample = () => {
    console.log('useStateEx1')

    //const initialValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
}