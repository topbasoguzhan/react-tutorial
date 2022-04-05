import React from 'react'

function StateSample() {

    var name = 'Rotting Christ';

    var changeName = () => {
        name = "The Beatles";
    }

    return (
        <>
            <h1>{name}</h1>
            <button onClick={() => changeName()}>Change Name</button>
        </>
    )
}

export default StateSample
