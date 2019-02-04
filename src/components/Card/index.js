import React, { Component } from 'react'
import { Col } from 'react-materialize'
import './index.css'

class Card extends Component {
    render() {
        const card = this.props.card;
        return (
            <Col s={12} m={6} l={3} xl={3}>
                <div className="cards__item">
                    <div className="cards__image"></div>
                    <div className="cards__title grey-text text-darken-2">{card.location.settlementName}</div>
                    <h5 className="cards__price">{
                        card.saleOffer === null ?
                        card.rentOffer === null ?
                        null :
                        `$${card.rentOffer.multiCurrencyPrice.usd.toLocaleString('ru')}` :
                        `$${card.saleOffer.multiCurrencyPrice.usd.toLocaleString('ru')}`
                    }
                    </h5>
                    <div className="cards__area">
                        <div style={{'marginRight': '30px'}} className="valign-wrapper">
                            <i class="tiny material-icons">map</i>
                            <span>{`${parseInt(card.landDetails.area)} сот`}</span>
                        </div>
                        {card.specification.area !== null ?
                            (
                                <div className="valign-wrapper">
                                    <i class="tiny material-icons">home</i>
                                    <span>{`${parseInt(card.specification.area)} м`}<sup>2</sup></span>
                                </div>
                            )
                            : ''
                        }

                    </div>
                </div>
            </Col>
        )
    }
}

export default Card
