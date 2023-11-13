import * as ActionTypes from './ActionTypes'

export const increment = () => {
    return {
        type: ActionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: ActionTypes.DECREMENT
    }
}

export const init = () => {
    return {
        type: ActionTypes.INIT
    }
}