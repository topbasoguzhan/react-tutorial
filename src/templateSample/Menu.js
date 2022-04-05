import React from 'react'


function Menu() {

    const metalGroups = [
        {
            name: 'Iron Maiden',
            description: `Iron Maiden, 1975 yılında Londra'da kurulmuş bir İngiliz heavy metal grubudur. Grup basçı Steve Harris tarafından kurulmuştur.`,
            country: 'U.K.'
        },
        {
            name: 'Gojira',
            description: `Gojira, 1996'da kurulmuş bir Fransız progresif metal grubu. 2001 yılına kadar Godzilla olarak bilinen grup, vokalist-ritim gitarist Joe Duplantier ve onun baterist kardeşi Mario Duplantier, solo gitarist Christian Andreu ve bas gitarist Jean-Michel Labadie'den oluşmaktadır.`,
            country: 'France'
        },
        {
            name: 'Lamb of God',
            description: `Lamb of God, beş kişiden oluşan Amerikan groove metal ve metalcore grubu. 1994 yılında, Virginia eyaletinin Richmond şehrinde kurulan grup; vokalist Randy Blythe, gitaristler Mark Morton ile Willie Adler, bas gitarist John Campbell ve baterist Chris Adler'dan oluşmaktadır.`,
            country: 'USA'
        }
    ]

    return (
        <>

            {/* Menu Section */}
            <div className="w3-row w3-padding-64" id="menu">
                <div className="w3-col l6 w3-padding-large">
                    <h1 className="w3-center">Our Menu</h1>

                    {
                        metalGroups && metalGroups.map((item, key) => {

                            return (
                                <div key={key}>
                                    <br />
                                    <h4>{item.name}</h4>
                                    <p className="w3-text-grey">
                                        {item.description}
                                        {item.country}
                                    </p>
                                </div>
                            )

                        })
                    }

                </div>
                <div className="w3-col l6 w3-padding-large">
                    <img
                        src="https://www.w3schools.com/w3images/tablesetting.jpg"
                        className="w3-round w3-image w3-opacity-min"
                        alt="Menu"
                        style={{ width: "100%" }}
                    />
                </div>
            </div>
            <hr />


        </>
    )
}

export default Menu
