export function loadAllCards() {
    return dispatch => {
        dispatch({
            type: 'LOAD_ALL_CARDS',
            payload: []
        })

    }
}
