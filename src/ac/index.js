import axios from 'axios';

export function loadAllCards() {
    console.log('dispatch');

    return dispatch => {
        dispatch({
            type: 'LOAD_CARDS_STARTED'
        })

        axios.get('https://api.jqestate.ru/v1/properties/country')
           .then(response =>{
               console.log(response.data);
               setTimeout(() => {
                   dispatch(loadCardsSuccess(response.data));
                   // dispatch({
                   //    type: 'LOAD_CARDS_SUCCESS',
                   //    payload: response.data
                   //  })
                }, 2500);
           })
           .catch(error => {
                console.log(error);
                dispatch({
                  type: 'LOAD_CARDS_FAILURE',
                  payload: error
                })
          })

    }
}

const loadCardsSuccess = cards => ({
  type: 'LOAD_CARDS_SUCCESS',
  payload: {
    ...cards
  }
});
