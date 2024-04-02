import {useState} from 'react';

export default {
    title: 'Select useMemo'
}


export const SelectWithMemo = () => {

    const [counter, setCounter] = useState<number>(0)
    const [citys, setCitys] = useState<any>([
        {
            id: 1,
            country: 'Russia',
            citys: ['Moscow', 'Omsk', 'Sochi']
        },
        {
            id: 2,
            country: 'Belarus',
            citys: ['Minsk', 'Bbb', 'Zlobin']
        },
        {
            id: 3,
            country: 'Ukraine',
            citys: ['Kiew', 'Odessa', 'Dolgoprudni']
        },
    ])


    return(
        <>
            <select>
                <option>{citys[0].citys.filter((c: string | string[]) => c.indexOf('c') > -1)}</option>
                <option>M</option>
                <option>M</option>
            </select>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </>
    )
}