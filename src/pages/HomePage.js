import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllCards } from './ac'

class HomePage extends Component {

    componentDidMount() {
        this.props.loadAllCards()
    }
    render() {
        return(
            <div>
                <h1>Элитная недвижимость в Подмосковье</h1>
                <div className="cards">
                    <div className="cards__item">
                        <img src="" alt="estate" className="cards__image"/>
                        <div className="cards__title">Монтевиль</div>
                        <div className="cards__price">23000000</div>
                        <div className="cards__area">18</div>
                    </div>
                </div>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
  return {loadAllCards}
}

export default connect(null, mapDispatchToProps)(HomePage)
