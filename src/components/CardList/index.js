import React, { Component } from 'react'
import Card from '../Card'

class CardList extends Component {
    render() {
        console.log(this.props.cards[0]);
        return this.props.cards[0].items.map(item => {
            return <Card card = {item} />
        })
    }
}

export default CardList
