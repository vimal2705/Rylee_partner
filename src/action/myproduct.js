import * as firebase from "firebase"
import syncStorage from "sync-storage";
import {MY_PRODUCT, MY_PRODUCT_ERROR} from './action.types';

export const myProduct = () => async (dispatch) => {
  console.log('kjhkjhkj',data);
  const uid = syncStorage.get('user_id')
  try {
    firebase.firestore()
    .collection('product_list')
    .doc(data)
    .collection('image_list')
     .get()
     .then( (snapshot) => {
       const array = []
        console.log('User data: ', snapshot);
        snapshot.forEach(item => { 
          array.push(item.data())
          console.log('fg',item.data().image);
      })
      console.log('array',array);
        if (snapshot) {
          dispatch({
            type: MY_PRODUCT,
            payload:array,
          });
        } else {
          dispatch({
            type: MY_PRODUCT,
            payload: [],
          });
        }
      });
  } catch (error) {
    dispatch({
      type: MY_PRODUCT_ERROR,
    });
  }
};
