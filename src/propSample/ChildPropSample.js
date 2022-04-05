import React from 'react'

function ChildPropSample(props) {


    return (
        <>
            <h1>{props.title}</h1>
            <button onClick={() => props.click("In Flames")}>Test</button>
        </>
    )
}

export default ChildPropSample
