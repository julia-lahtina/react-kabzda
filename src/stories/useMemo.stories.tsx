import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(1);
    const [b, setB] = useState<number>(1);

    let resultA = 1;

    resultA = useMemo(() => {
            let tempResultA = 1;
            for (let i = 1; i <= a; i++) {
                let fake = 0;
                while (fake < 10000000) {
                    fake++;
                    const fakeValue = Math.random();
                }
                tempResultA = tempResultA * i;
            }
            return tempResultA;
        }

        , [a])

    let resultB = 1;


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }


    return (
        <>
            <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

export const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsReactMemo = () => {
    console.log('Helps ReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState<Array<string>>(['Dimych', 'Valera', 'Artem', 'Katya'])

    const addUser = () => {
       const newUser = [...users, 'Sveta']
        setUsers(newUser)
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}

        <Users users={newArray}/>
    </>
}