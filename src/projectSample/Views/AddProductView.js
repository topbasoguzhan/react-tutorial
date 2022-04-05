import { Button, Form, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { baseManager } from '../request/baseManager'

function AddProductView() {

    let navigate = useNavigate();

    const onFinish = (values) => {

        baseManager.add("/products",values)
        .then((res) => {

            navigate('/products');

        })

    }

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
            >

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Unit Price"
                    name="unitPrice"
                    rules={[{ required: true, message: 'Please input your unit price!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Units In Stock"
                    name="unitsInStock"
                    rules={[{ required: true, message: 'Please input your units in stock!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </>
    )
}

export default AddProductView
