
import React from 'react'

function JsxEvents() {

    let name = "Güzell"

    const hello = () => {
        name = "Wissen!";
        console.log('Hello JSX events!!');

    
    }


    return (
        <>
        {name}
            {/* <button onClick={hello}>Hello!</button> */}
            <button onClick={() => hello()}>Hello!</button>
        </>
    )
}

export default JsxEvents
