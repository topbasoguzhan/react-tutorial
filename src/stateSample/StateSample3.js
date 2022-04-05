import React, { useState } from 'react'

function StateSample3() {
    
    const [countries, setCountries] = useState(['Beirut', 'Berlin', 'İstanbul', 'LA']);

    const clearCountries = () => {
        setCountries([]);
    }
    return (
        <>
            <ul>
                {
                    countries && countries.map((item, key) => (<li>{item}</li>))
                }
            </ul>
            <button onClick={() => clearCountries()}>Clear</button>
        </>
    )
}

export default StateSample3
