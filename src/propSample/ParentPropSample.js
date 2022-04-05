import React from 'react'
import ChildPropSample from './ChildPropSample'

function ParentPropSample() {


    const clickMe = (data) => {
        console.log('Data', data);
    }

    return (
        <div>
            <ChildPropSample title='Wissen Akademi' click={clickMe}></ChildPropSample>
        </div>
    )
}

export default ParentPropSample
