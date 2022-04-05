import React from 'react'

function AddSuplierList(props) {

    const { supliers } = props;
  return (
    <>
            <ul>
                {
                    supliers && supliers.map((item, key) => {

                        return (
                        <li>{item.companyName}<span> </span>{item.contactName}</li>
                        )

                    })
                }
            </ul>
        </>
  )
}

export default AddSuplierList