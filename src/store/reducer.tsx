import { actionType } from './actionType'

interface IAction {
    type: actionType,
    payload?: any
}

const initState = {}

export const Reducer = (state: Object = initState, action: IAction ) => {
    switch (action.type) {
        case actionType.UPDATE_MENU:
            return { ...state, ...action.payload }
        case actionType.UPDATE_USER:          
            return { ...state, ...action.payload }
        default:
            return state
    }
}
