import {SET_ORDER, ERROR_ORDER} from '../action/action.types';

const initialState = {
  orders: null,
  loading: true,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: false,
      };

    case ERROR_ORDER:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
