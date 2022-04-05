import React, { useState } from 'react'

function StateSample2() {


    console.log('State Sample2 component rendered!!!');

    const [name, setName] = useState('Rotting Christ')



    return (
         <>
            <h1>{name}</h1>
            <button onClick={() => setName('The Beatles')}>Change Name</button>
        </>
    )
}

export default StateSample2
