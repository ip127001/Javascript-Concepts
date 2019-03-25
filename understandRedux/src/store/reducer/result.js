import * as actionTypes from '../actions';

const initailState = {
    results: []
}

const reducer = (state = initailState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            let updatedArray = state.results.filter(result => result.id !== action.elemId)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;