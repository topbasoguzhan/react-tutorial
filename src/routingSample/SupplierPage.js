import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SupplierPage() {

    const [suppliers, setSuppliers] = useState([]);
    let navigate = useNavigate();


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {
                setSuppliers(data);
            });

    }, []);


    const goToDetail = (id) => {
        navigate('/suppliers/detail/' + id);   
    }


    return (
        <>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Title</td>
                    <td>Detail</td>
                </tr>
                {
                    suppliers && suppliers.map((item, key) => {
                       return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => goToDetail(item.id)}>Go to detail!</button></td>
                        </tr>

                    })
                }
            </table>
        </>
    )
}

export default SupplierPage
