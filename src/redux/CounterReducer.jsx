import * as actionTypes from './ActionTypes'

const init_state = {
    counter: 0
}

const CounterReducer = (state = init_state, action) => {

    var newState = { ...state }

    switch (action.type) {
        case actionTypes.INCREMENT: newState.counter += 1; break;
        case actionTypes.DECREMENT: newState.counter -= 1; break;
        case actionTypes.INIT: newState.counter = 1; break;
    }

    return newState;
}

export default CounterReducer