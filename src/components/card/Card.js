import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './Card.css'
const Card = (props) => {
    const flipCard = (id) => {
        console.log(id)
        id = "#" + id
        var card = document.querySelector(id);
        card.classList.toggle('is-flipped');
    }


    return <>
        <div className="row allcards">
            {props && props.data.length != 0 && props.data.map((ele, i) => {
                console.log("hello")
                return (

                    <div className="cardContainer">
                        <div className="itemcards front">
                            <div className="scene">
                                <div className="card" id={ele.id} onClick={() => { flipCard(ele.id) }} >
                                    <div className="itemImage card__face card__face--front"></div>
                                    <div className="back card__face card__face--back"></div>
                                </div>
                            </div>
                            <div className="details">
                                <h2 className="itemName">{ele.title}</h2>
                                <Row className="r1">
                                    <h2 className="c3">From:</h2>
                                    <h2 className="c4">{ele.shop}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Owner:</h2>
                                    <h2 className="c4">{ele.seller}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Contact:</h2>
                                    <h2 className="c4">{ele.contact}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3">Dimensions</h2>
                                    <h2 className="c4">{ele.dimension}</h2>
                                </Row>
                                <Row className="r1">
                                    <h2 className="c3 i1">Rs{ele.price}</h2>
                                    <Button className="mybtn btn-success">Purchase</Button>
                                </Row>
                            </div>

                        </div>

                    </div>

                )
            })}
        </div>


    </>
}

export default Card
