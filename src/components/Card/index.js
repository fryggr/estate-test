import React, { Component } from 'react'
import { Col } from 'react-materialize'

class Card extends Component {
    render() {
        const card = this.props.card
        return (
            <Col s={4}>
                <div className="cards__item">
                    <img src="" alt="estate" className="cards__image"/>
                    <div className="cards__title">{card.location.settlementName}</div>
                    <div className="cards__price">{card.saleOffer === null ? card.rentOffer === null ? null : card.rentOffer.price : card.saleOffer.price}</div>
                    <div className="cards__area">{card.landDetails.area}</div>
                </div>
            </Col>
        )
    }
}

export default Card
