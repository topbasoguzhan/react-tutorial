import React, { useRef } from 'react'

function RefSample() {

    const boxRef = useRef(null)

    const changeDiv = () => {

        boxRef.current.style.backgroundColor = 'tomato'

        // document.getElementById('box').style.backgroundColor = 'tomato';
    }

    return (
        <div>
            <div ref={boxRef}>Hello Moonspell</div>
            <div>Hello In Flames</div>
            {/* <div id='box'>Hello React</div> */}
            <button onClick={() => changeDiv()}>Change Div Color</button>
        </div>
    )
}

export default RefSample
