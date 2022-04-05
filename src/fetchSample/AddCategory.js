import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';

function AddCategory() {

    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [categories, setCategories] = useState([]);


    const addNewCategory = () => {

        let newCategory = { name: categoryName, description: categoryDescription };
        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        }


        fetch("https://northwind.vercel.app/api/categories", requestOptions)
            .then(res => res.json())
            .then((data) => {
                console.log('New category!!', data);

                // getAllCategories();
                setCategories([...categories, data]);
            })

    }

    useEffect(() => {

        getAllCategories();

    }, [])



    const getAllCategories = () => {

        fetch("https://northwind.vercel.app/api/categories")
            .then(res => res.json())
            .then((data) => {
                setCategories(data);
            })

    }


    return (
        <>
            <div>
                <label>Name:</label>
                <input type='text' value={categoryName} onChange={(e) => setCategoryName(e.target.value)}></input>
            </div>
            <div>
                <label>Description:</label>
                <input type='text' value={categoryDescription} onChange={(e) => setCategoryDescription(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => addNewCategory()}>Add</button>
            </div>

            <CategoryList categories={categories}></CategoryList>
        </>
    )
}

export default AddCategory
