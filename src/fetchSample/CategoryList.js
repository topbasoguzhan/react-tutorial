import React from 'react'

function CategoryList(props) {

    const { categories } = props;
    return (
        <>
            <ul>
                {
                    categories && categories.map((item, key) => {

                        return (<li>{item.name}</li>)

                    })
                }
            </ul>
        </>
    )
}

export default CategoryList
