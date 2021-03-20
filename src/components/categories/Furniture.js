import React from 'react'
import './cat.css'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
const Furniture = () => {
    const data = [{itemName:"Chair",price:"Rs3000",shop:"XYZ",owner:"name",phone:"2131312312312"},{itemName:"Chair",price:"Rs3000",shop:"XYZ",owner:"name",phone:"2131312312312"},{itemName:"Chair",price:"Rs3000",shop:"XYZ",owner:"name",phone:"2131312312312"}]
    return (
        <div className="d1">
            <h1 className="title">Furniture</h1>
            <div className="row allcards">
                <div className="cardContainer">
                <div className="itemcards front">
                    <div className="itemImage"></div>
                    <div className="details">
                        <h2 className="itemName">ItemName</h2>
                        <Row className="r1">
                            <h2 className="c3">From:</h2>
                            <h2 className="c4">Shop Name</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Owner:</h2>
                            <h2 className="c4">Owner Name</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Contact:</h2>
                            <h2 className="c4">1234567890</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Dimensions</h2>
                            <h2 className="c4">4x3 ft</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Rs.3000</h2>
                            <Button className="mybtn btn-success">Purchase</Button>
                        </Row>
                    </div>

                </div>
                <div className="back"></div>  
                </div>  
                <div className="cardContainer">
                <div className="itemcards front">
                    <div className="itemImage"></div>
                    <div className="details">
                        <h2 className="itemName">ItemName</h2>
                        <Row className="r1">
                            <h2 className="c3">From:</h2>
                            <h2 className="c4">Shop Name</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Owner:</h2>
                            <h2 className="c4">Owner Name</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Contact:</h2>
                            <h2 className="c4">1234567890</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Dimensions</h2>
                            <h2 className="c4">4x3 ft</h2>
                        </Row>
                        <Row className="r1">
                            <h2 className="c3">Rs.3000</h2>
                            <Button className="mybtn btn-success">Purchase</Button>
                        </Row>
                    </div>

                </div>
                <div className="back"></div>  
                </div>  
            </div>
        </div>
    )
}

export default Furniture
