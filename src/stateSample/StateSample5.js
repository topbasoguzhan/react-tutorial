import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

function StateSample5() {

    const [suppliers, setSuppliers] = useState(['Öz Wissen']);
    const [companyName, setCompanyName] = useState('');


    console.log('State Sample 5 component render!');


    const addSupplier = () => {

       setSuppliers([...suppliers, companyName])

    }


    return (
        <>
  <ChildComponent></ChildComponent>
            <div>
                <label>Company Name:</label>
                <input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>

            <div>
                <button onClick={() => addSupplier()}>Add</button>
            </div>

            <ul>
                {
                  suppliers && suppliers.map((item,key) => {
                   return   <li key={key}>{item}</li>
                  })  
                }
            </ul>
          
        </>
    )
}

export default StateSample5
