import React, { useEffect, useState } from 'react'

function EffectSample2() {

    const [sayac, setSayac] = useState(0);
    const [sayac2, setSayac2] = useState(0);



    useEffect(() => {
        console.log('Use Effect - 1 worked!');
    }, [])
    

    useEffect(() => {
        console.log('Use Effect - 2 worked!');
      
    }, [sayac2])

    return (
        <>
            <div>
                <h1>{sayac}</h1>
                <button onClick={() => setSayac(sayac + 1)}>Arttır</button>
            </div>
            <div>
                <h1>{sayac2}</h1>
                <button onClick={() => setSayac2(sayac2 + 1)}>Arttır-2</button>
            </div>
        </>
    )
}

export default EffectSample2


//props, useState**, useEffect