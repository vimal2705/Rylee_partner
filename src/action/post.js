import * as firebase from "firebase"
import syncStorage from "sync-storage";
import {SET_POST, ERROR_POST} from './action.types';

export const getPosts = () => async (dispatch) => {
  const uid = syncStorage.get('user_id')
  try {
    firebase.firestore()
    .collection('product_list')
     .get()
     .then( (snapshot) => {
       const array = []
        console.log('User data: ', snapshot);
        snapshot.forEach(item => { 
          array.push(item.data())
          console.log('fg',item.data());
      })
      console.log('array',array);
        if (snapshot) {
          dispatch({
            type: SET_POST,
            payload:array,
          });
        } else {
          dispatch({
            type: SET_POST,
            payload: [],
          });
        }
      });
  } catch (error) {
    dispatch({
      type: ERROR_POST,
    });
  }
};
