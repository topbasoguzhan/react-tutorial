
import React, { useEffect, useState } from 'react'
import SupliersList from './SupliersList';

function SupliersPage() {


    const [supliers, setSuplier] = useState([]);


   

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then((data) => {
            setSuplier(data);
        })
    

    }, [])
  return (


    <SupliersList supliers={supliers}></SupliersList>
  )
}

export default SupliersPage