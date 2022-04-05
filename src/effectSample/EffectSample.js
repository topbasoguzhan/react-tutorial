import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [sayac, setSayac] = useState(0);


    console.log("1");

    //useEffect component ayağa çağrıldığında sadece 1 KEZ ÇALIŞIR. state değişimlerinden etkilenmez! böylelikle kimi maliyetli işleri buraya saklayabilirz. (data çekme vb.)
    useEffect(() => {

        console.log('Effect sample component rendered!');

    }, [])

    return (
        <>
            <h1>Sayac {sayac}</h1>
            <button onClick={() => setSayac(sayac + 1)}>Arttir</button>
        </>
    )
}

export default EffectSample
