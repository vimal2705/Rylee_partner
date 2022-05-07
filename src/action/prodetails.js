import * as firebase from "firebase"
import syncStorage from "sync-storage";
import {PRODUCT_DEATAILS,PRODUCT_DEATAILS_ERROR} from './action.types';

export const getProducts = () => async (dispatch) => {
  console.log('kjhkjhkj');
  const uid = syncStorage.get('user_id')
  try {
    firebase.firestore()
    .collection('product_list')
    .doc('P9dEQaBDYpwbCZOIfEaU')
    .collection('image_list')
     .get()
     .then( (snapshot) => {
       const array = []
        console.log('User data: ', snapshot);
        snapshot.forEach(item => { 
          array.push(item.data().image)
          console.log('fg',item.data().image);
      })
      console.log('array',array);
        if (snapshot) {
          dispatch({
            type: PRODUCT_DEATAILS,
            payload:array,
          });
        } else {
          dispatch({
            type: PRODUCT_DEATAILS,
            payload: [],
          });
        }
      });
  } catch (error) {
    dispatch({
      type: PRODUCT_DEATAILS_ERROR,
    });
  }
};
