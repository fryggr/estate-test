import axios from 'axios';

export function loadAllCards() {

    return dispatch => {
        dispatch(loadCardsStarted())

        axios.get('https://api.jqestate.ru/v1/properties/country')
           .then(response =>{
               setTimeout(() => {
                   dispatch(loadCardsSuccess(response.data));
                   // throw new Error('NOT!');
                }, 2500);
           })
           .catch(error => {
                dispatch(loadCardsFailure(error));
          })

    }
}

const loadCardsStarted = () => ({
  type: 'LOAD_CARDS_STARTED'
});

const loadCardsSuccess = cards => ({
  type: 'LOAD_CARDS_SUCCESS',
  payload: {
    ...cards
  }
});

const loadCardsFailure = error => ({
  type: 'LOAD_CARDS_FAILURE',
  payload: error
});
