import React, { Component } from 'react'
import Card from '../Card'

class CardList extends Component {
    render() {
        return this.props.cards.map(item => {
            return <Card card = {item} />
        })
    }
}

export default CardList
