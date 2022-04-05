import React from 'react'

function ProductList(props) {

    return (
        <>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Units In Stock</td>
                    <td>Price</td>

                </tr>
                {
                    props.products.map((item, key) => {
                        return (<tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.unitPrice}</td>
                        </tr>)
                    })
                }

            </table>
        </>
    )
}

export default ProductList
