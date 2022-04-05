import React from 'react'
import { connect } from 'react-redux'

function Favorites(props) {


    return (
        <div>
            <ul>
                {
                    props.favorites && props.favorites.map((item,key) => {
                       return <li>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: state
    };
}

export default connect(mapStateToProps)(Favorites)
