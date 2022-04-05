import React from 'react'
import { useSelector } from 'react-redux';

function Favorites2() {

    const favorites = useSelector(state => state);

    console.log('favorites', favorites);

    return (
        <div>
            <ul>
                {
                    favorites && favorites.map((item,key) => {
                     return   <li>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Favorites2
