import {ADD_PRODUCT, ERROR_PRODUCT} from '../action/action.types'

const initialState = {
  
    loading: true,
    productadd: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                loading: false
            }
            case ERROR_PRODUCT :
                return {
                ...state,
                    productadd :action.payload,
                    loading: false
            }
  
        default:
            return state
    }
}