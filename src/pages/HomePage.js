import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllCards} from '../ac'
import CardList from '../components/CardList'
import { Pagination, Row, Col, ProgressBar } from 'react-materialize'

class HomePage extends Component {

    componentDidMount() {
        this.props.loadAllCards(1)
    }

    paginationSelect = (e) => {
        this.props.loadAllCards(e)
    }
    render() {
        const { loading, cards, activeIndex, total, limit } = this.props
        const body = cards.length ? (
            <div>
                <Pagination
                    items={total % limit === 0 ? parseInt(total / limit) : parseInt(total / limit) + 1}
                    activePage={activeIndex}
                    maxButtons={5}
                    onSelect={this.paginationSelect}
                />
                <Row>
                    <CardList cards = { cards } />
                </Row>
            </div>
            ) : (
                <h3>Нет объектов</h3>
            )
        return (<div className="container">
            <h3>Элитная недвижимость в Подмосковье</h3>
            {
                loading
                    ?
                        <Row>
                          <Col s={12}>
                            <ProgressBar />
                          </Col>
                        </Row>
                    : body
            }
        </div>)
    }
}

const mapStateToProps = state => {
    const { cards, activeIndex, total, limit, loading } = state;
    return {cards, activeIndex, total, limit, loading }
}

const mapDispatchToProps = dispatch => {
    return {
        loadAllCards: (cards) => {
            dispatch(loadAllCards(cards))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
