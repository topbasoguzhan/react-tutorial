import React from 'react'

function SupliersList(props) {
  return (
    <>
            <table>
                <tr>
                    <td>Id</td>
                    <td>companyName</td>
                    <td>contactName</td>
                    <td>contactTitle</td>
                    <td>Country</td>
                    <td>PostalCode</td>



                </tr>
                {
                    props.supliers.map((item, key) => {
                        return (<tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>{item.address.country}</td>
                            <td>{item.address.postalCode}</td>

                        </tr>)
                    })
                }

            </table>
        </>
  )
}

export default SupliersList