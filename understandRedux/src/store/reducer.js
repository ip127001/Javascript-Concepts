const initailState = {
    counter: 0,
    results: []
}

const reducer = (state = initailState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT': 
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
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