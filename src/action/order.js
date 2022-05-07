import * as firebase from "firebase"
import syncStorage from "sync-storage";
import {SET_ORDER, ERROR_ORDER} from './action.types';

export const getOrders = () => async (dispatch) => {
  const uid = syncStorage.get('user_id')
  try {
    firebase.firestore()
    .collection('order_list')
  .orderBy("timeStamp", "desc")
     .get()
     .then( (snapshot) => {
       const array = []
        console.log('User data: ', snapshot);
        snapshot.forEach(item => { 
          array.push(item.data())
      })
      console.log('array',array);
        if (snapshot) {
          dispatch({
            type: SET_ORDER,
            payload:array,
          });
        } else {
          dispatch({
            type: SET_ORDER,
            payload: [],
          });
        }
      });
  } catch (error) {
    dispatch({
      type: ERROR_ORDER,
    });
  }
};
