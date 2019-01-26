const initialState = {
  loading: false,
  cards: [],
  error: null
};

export default (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case 'LOAD_CARDS_STARTED':
            return {
                ...state,
                loading: true
            }
        case 'LOAD_CARDS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                cards: action.payload.cards,
                pagination: action.payload.pagination
            }
        case 'LOAD_CARDS_FAILURE':
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        default:
            return state
    }
}
