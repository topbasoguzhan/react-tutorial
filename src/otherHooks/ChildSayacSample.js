import React, { useState } from 'react'

function ChildSayacSample() {

    
    const [sayac, setSayac] = useState(0);

    console.log('Child component rendered!');

    return (
        <div>
            <p>Child Component</p>
            <h1>Sayaç 2 : {sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Arrtır</button>
        </div>
    )
}

export default React.memo(ChildSayacSample)
