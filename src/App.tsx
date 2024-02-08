import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    return (
        <div className="App">
            <Button title={"ON"} isOn={true}/>
            <Button title={"OFF"} isOn={false}/>
        </div>
    );
}

export default App;
