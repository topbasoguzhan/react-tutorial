import React, { useEffect, useState } from 'react'
import AddSuplierList from './AddSuplierList';

function AddSuplier() {
    const [suplierCompanyName, setsuplierCompanyName] = useState('');
    const [suplierContactName, setSuplierContactName] = useState('');
    const [supliers, setSupliers] = useState([]);

    
    const addNewSuplier = () => {

        let newSuplier = { companyName: suplierCompanyName, contactName: suplierContactName };
        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSuplier)
        }


        fetch("https://northwind.vercel.app/api/suppliers", requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log('New suplier!!', data);

                // getAllCategories();
                setSupliers([...supliers, data]);
            })

    }

    useEffect(() => {

        getAllCategories();

    }, [])



    const getAllCategories = () => {

        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {
                setSupliers(data);
            })

    }






  return (
    <>
    <div>
        <label>CompanyName:</label>
        <input type='text' value={suplierCompanyName} onChange={(e) => setsuplierCompanyName(e.target.value)}></input>
    </div>
    <div>
        <label>SuplierContactNAme:</label>
        <input type='text' value={suplierContactName} onChange={(e) => setSuplierContactName(e.target.value)}></input>
    </div>
    <div>
        <button onClick={() => addNewSuplier()}>Add</button>
    </div>

    <AddSuplierList supliers={supliers}></AddSuplierList>
</>
   



  )
}

export default AddSuplier