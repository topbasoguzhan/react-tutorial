import React, { useState } from 'react'
import ChildSayacSample from './ChildSayacSample';

function ParentSayacSample() {

    const [sayac, setSayac] = useState(0);

    return (
        <>
            <div>
                <h1>{sayac}</h1>
                <button onClick={() => setSayac(sayac + 1)}>Arttır</button>
            </div>
            <ChildSayacSample></ChildSayacSample>
        </>

    )
}

export default ParentSayacSample
