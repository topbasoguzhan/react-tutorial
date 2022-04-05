import { Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import { baseManager } from '../request/baseManager'

function ProductListView() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts();
    }, []);



    const getProducts = () => {
        baseManager.getall('/products')
            .then((data) => {
                setLoading(false);
                setProducts(data);
            })
    }

    const removeProduct = (id) => {

        baseManager.delete("/products/" + id)
            .then((res) => {
                getProducts();

            })

    }


    return (
        <>
            <Spin tip="Loading..." spinning={loading}>
                <h1>Product List Screen</h1>
                <ProductList products={products} remove={removeProduct}></ProductList>
            </Spin>

        </>
    )
}

export default ProductListView
