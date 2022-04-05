import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Table } from 'antd';

function SupplierList() {


    
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName'
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName',
            key: 'contactName'
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle',
            key: 'contactTitle'
        },
        {
            title:'Delete',
            dataIndex:'id',
            key:'id',
            render: (id) => <Button danger onClick={() => deleteSupplier(id)}>Delete</Button>
        }
    ];

    const deleteSupplier = (id) => {

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch("https://northwind.vercel.app/api/suppliers/" + id, requestOptions)
        .then(res => res.json())
        .then((data) => {
            getSuppliers();
        })

    }

    const [supplierList, setSupplierList] = useState([]);

    useEffect(() => {

        getSuppliers();

    }, []);


    const getSuppliers = () => {
        fetch("https://northwind.vercel.app/api/suppliers")
        .then(res => res.json())
        .then((data) => {
            setSupplierList(data);
        })
    }

    return (
        <>
            <Table dataSource={supplierList} columns={columns}></Table>
        </>
    )
}

export default SupplierList
