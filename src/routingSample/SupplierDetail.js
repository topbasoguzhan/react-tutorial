import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SupplierDetail() {


    let { id } = useParams();

    const [supplierDetail, setSupplierDetail] = useState({});

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers/" + id)
            .then(res => res.json())
            .then((data) => {
                setSupplierDetail(data);
            })

    }, [])

    return (
        <div>
            <h1>Detail Page</h1>
            <h3>Company Name: {supplierDetail.companyName}</h3>
            <h3>Contact Title: {supplierDetail.contactTitle}</h3>
            <h3>Contact Name: {supplierDetail.contactName}</h3>
        </div>
    )
}

export default SupplierDetail
