import {PRODUCT_DEATAILS_ERROR,PRODUCT_DEATAILS} from '../action/action.types';

const initialState = {
 product: null,
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DEATAILS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: false,
      };

    case PRODUCT_DEATAILS_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
