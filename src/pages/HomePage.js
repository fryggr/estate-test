import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllCards} from '../ac'
import CardList from '../components/CardList'
import { Pagination } from 'react-materialize'

class HomePage extends Component {

    componentDidMount() {
        this.props.loadAllCards(1)
    }

    paginationSelect = (e) => {
        this.props.loadAllCards(e)
    }
    render() {
        const { loading, cards } = this.props
        const body = cards.length ? (
            <div>
                <Pagination
                    items={5}
                    activePage={1}
                    maxButtons={8}
                    onSelect={this.paginationSelect}
                />
                <CardList cards = { cards } />
            </div>
            ) : (
                <h3>Нет объектов</h3>
            )
        return (<div>
            {/*<h1>Элитная недвижимость в Подмосковье</h1>*/}
            {
                loading
                    ? <p>Загрузка...</p>
                    : body
            }
        </div>)
    }
}

const mapStateToProps = state => {
    const { cards, pagination } = state;
    return {cards, pagination }
}

const mapDispatchToProps = dispatch => {
    return {
        loadAllCards: (cards) => {
            dispatch(loadAllCards(cards))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
