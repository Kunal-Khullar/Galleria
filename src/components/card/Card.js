import React from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './Card.css'
const Card = (props) => {
    console.log(props.data)
    return <>
        <div className="row allcards">
            {props.data.map((ele, i) => {
                return (

                    <div className="cardContainer">
                        <div className="itemcards front">
                            <div className="itemImage"></div>
                            <div className="details">
                                <h2 className="itemName">{ele.itemName}</h2>
                                <Row className="r1">
                                    <h2 className="c3">From:</h2>
                                    <h2 className="c4">{ele.shop}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Owner:</h2>
                                    <h2 className="c4">{ele.owner}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Contact:</h2>
                                    <h2 className="c4">{ele.phone}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Dimensions</h2>
                                    <h2 className="c4">{ele.dimension}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Rs.3000</h2>
                                    <Button className="mybtn btn-success">Purchase</Button>
                                </Row>
                            </div>

                        </div>
                        <div className="back"></div>
                    </div>

                )
            })}
        </div>


    </>
}

export default Card
