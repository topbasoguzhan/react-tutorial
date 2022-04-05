import React, { useState } from 'react'

function StateSample4() {

    
    const categoryList = [
        {
            "id": 2,
            "description": "Sweet and savory sauces relishes spreads and seasonings",
            "name": "Condiments"
        },
        {
            "id": 1,
            "description": "Soft drinks coffees teas beers and ales",
            "name": "Beverages"
        },
        {
            "id": 3,
            "description": "Desserts candies and sweet breads",
            "name": "Confections"
        },
        {
            "id": 4,
            "description": "Cheeses",
            "name": "Dairy Products"
        },
        {
            "id": 5,
            "description": "Breads crackers pasta and cereal",
            "name": "Grains/Cereals"
        },
        {
            "id": 6,
            "description": "Prepared meats",
            "name": "Meat/Poultry"
        },
        {
            "id": 7,
            "description": "Dried fruit and bean curd",
            "name": "Produce"
        },
        {
            "id": 8,
            "description": "Seaweed and fish",
            "name": "Seafood"
        }
    ]

    const [categories, setCategories] = useState(categoryList);


    const deleteProduct = (id) => {

         var newCategoryList = categories.filter(q => q.id != id);

         setCategories(newCategoryList);


        // categories.push({name:'sport', description:'SportsProduct'});

        // setCategories([...categories, {name:'sport', description:'SportsProduct'}]);
    }

    return (
        <>
        <h1>Count: {categories.length}</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Desc</td>
                    <td>Delete</td>
                </tr>

                {
                    categories && categories.map((item, key) => {
                      return  (<tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                        </tr>)
                    })
                }
            </table>

        </>
    )
}

export default StateSample4



