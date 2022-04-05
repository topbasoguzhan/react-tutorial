import { Button, Table } from 'antd'
import React from 'react'
import { connect } from 'react-redux';
import { addFavorite } from '../../state/actions/favorites.actions';
import { baseManager } from '../request/baseManager';

function ProductList(props) {

    console.log('PROPS', props.favorites.length);

    const deleteProduct = (id) => {

        props.remove(id);

    }


    const addFavorite = (id) => {

        let product = props.products.find(q => q.id == id);


        props.addFavorite(product)

    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Category Id',
            dataIndex: 'categoryId',
            key: 'categoryId'
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button danger onClick={() => deleteProduct(id)}>Delete</Button>
        },
        {
            title: 'Add Favorite',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button type='primary' onClick={() => addFavorite(id)}>Add Favorite</Button>
        }
    ];

    return (
        <>
            <h1> {props.favorites.length}</h1>
            <Table dataSource={props.products} columns={columns}></Table>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFavorite: (data) => {
            dispatch(addFavorite(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)


