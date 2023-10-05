import React from "react";
import {useState} from "react";
import Menu from "../components/Menu/Menu.jsx";

function App() {
    {
        const [actualFrame, setActualFrame] = useState(null);
    
        return (
        <>
            <Menu setActualFrame={setActualFrame}/>
            {
                actualFrame
            }
        </>
        );
    }
}
export default App;