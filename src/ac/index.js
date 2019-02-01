export function loadAllCards(e) {

    return dispatch => {
        dispatch(loadCardsStarted())
        try {
            return fetch(`https://api.jqestate.ru/v1/properties/country?pagination[offset]=${e}`)
                .then(response => response.json())
                .then(res => {dispatch(loadCardsSuccess({cards:res.items, pagination: res.pagination})); })
        } catch (e) {
            dispatch(loadCardsFailure(e));
        }
    }
}

const loadCardsStarted = () => ({
    type: 'LOAD_CARDS_STARTED'
});

const loadCardsSuccess = data => ({
    type: 'LOAD_CARDS_SUCCESS',
    payload: data
});

const loadCardsFailure = error => ({
    type: 'LOAD_CARDS_FAILURE',
    payload: error
});
