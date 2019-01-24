import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllCards} from '../ac'
import CardList from '../components/CardList'

class HomePage extends Component {

    componentDidMount() {
        this.props.loadAllCards()
    }
    render() {
        const { loading, cards } = this.props
        const body = cards.length ? (
            <CardList cards = { cards } />
            ) : (
                <h3>No cards yet</h3>
            )
        return (<div>
            <h1>Элитная недвижимость в Подмосковье</h1>
            {
                loading
                    ? <p>Загрузка...</p>
                    : body
            }
        </div>)
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        loadAllCards: (cards) => {
            dispatch(loadAllCards(cards))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
