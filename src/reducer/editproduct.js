import {EDIT_PRODUCT} from '../action/action.types'

const initialState = {
    loading: true,
   
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EDIT_PRODUCT:
            return {
                ...state,
                loading: false
            }
           
  
        default:
            return state
    }
}