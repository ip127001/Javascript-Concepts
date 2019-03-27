import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initailState = {
    results: []
}

const deleteResult = (state, action) => {
    let updatedArray = state.results.filter(result => result.id !== action.elemId)
    return updateObject(state, {results: updatedArray});
}

const reducer = (state = initailState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
        case actionTypes.DELETE_RESULT: return deleteResult(state, action)
        default: return state;
    }
}

export default reducer;