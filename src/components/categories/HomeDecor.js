import React from 'react'
import './cat.css'
import Card from '../card/Card'
const HomeDecor = () => {
    const data = [{ itemName: "Chair", price: "Rs3000", shop: "XYZ", owner: "name", phone: "2131312312312", dimension: "3x5cm" }, { itemName: "Chair", price: "Rs3000", shop: "XYZ", owner: "name", phone: "2131312312312", dimension: "3x5cm" }, { itemName: "Chair", price: "Rs3000", shop: "XYZ", owner: "name", phone: "2131312312312", dimension: "3x5cm" }]

    return (
        <div>

            <h1 className="title">Home Decor</h1>
            <Card data={data} />

        </div>
    )
}

export default HomeDecor
