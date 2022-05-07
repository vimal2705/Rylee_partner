import * as firebase from "firebase"
import syncStorage from "sync-storage";
import {ADD_PRODUCT, ERROR_PRODUCT} from './action.types';

export const addProduct = (data,navigation) => async (dispatch) => {
    var refid = firebase.firestore().collection('product_list').doc()
   var imgid = firebase.firestore().
            collection("product_list")
            .doc(refid.id)
            .collection('image_list')
            
           

    console.log(data)


    
    const uploadImage = async (uri, uid) => {
   
        const response = await fetch(uri)
        const blobSol = await response.blob();
        var user_id = uid;
        const db = firebase.firestore()
        // const ref = db.collection("sub_cat_list").doc(subCatId).collection("img_list").doc();
        // const id = ref.id;
    
        // var blobSol = new Blob([elementImg], { type: "image/jpeg" });
        // var storageUrl = "tretment_img/";
        // var storageRef = firebase.storage().ref(storageUrl + id);
    
     
      
        var ref = firebase.storage().ref(`products/${user_id}/`)
      
        // return ref.put(response)
        const uploadTask =  ref.put(blobSol);
        console.log("upload task : " + JSON.stringify(uploadTask));
      
      
        uploadTask.on('state_changed', function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
      
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function (error) {
          console.log(error);
      
        }, function () {
      
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      
            db.collection('product_list').doc(uid).update({
              image: downloadURL
            })
          })
      
        })
      
      } 

      const uploadImagepath = async (uri, uid,imgid) => {
   
        const response = await fetch(uri)
        const blobSol = await response.blob();
        var user_id = uid;
        const db = firebase.firestore()
        // const ref = db.collection("sub_cat_list").doc(subCatId).collection("img_list").doc();
        // const id = ref.id;
    
        // var blobSol = new Blob([elementImg], { type: "image/jpeg" });
        // var storageUrl = "tretment_img/";
        // var storageRef = firebase.storage().ref(storageUrl + id);
    
     
      
        var ref = firebase.storage().ref(`products/${user_id}/${imgid}`)
      
        // return ref.put(response)
        const uploadTask =  ref.put(blobSol);
        console.log("upload task : " + JSON.stringify(uploadTask));
      
      
        uploadTask.on('state_changed', function (snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
      
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        }, function (error) {
          console.log(error);
      
        }, function () {
      
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
      
            db.collection('product_list').doc(uid).collection('image_list').doc(imgid).update({
              image: downloadURL
            })
          })
      
        })
      
      
      } 
    const {categories ,description ,image ,productcolor ,productsize,productname,productprice} = data

refid
   .set({
    image: image[0],
                size: productsize,
                color:productcolor,
                name:productname,
                categories:categories,
                price:productprice,
                description:description,
                  date:new Date().getTime(),
                  id: refid.id,
             
           

          }) .then(
           
            uploadImage( image[0],refid.id),
   
            
            image.forEach((element,index) => {
              var imgid = firebase.firestore(). collection("product_list").doc(refid.id).collection('image_list').doc()
              console.log(`image +${index}`,element);
              imgid
              .set({
                image:element,
              id:imgid.id
              }).then(
              console.log(`imageid +${index}`,imgid.id),
              uploadImagepath(element,refid.id,imgid.id)
              )
             
              dispatch({
                type: ADD_PRODUCT,
              
              }) 
            })
            
              
             
              )
       
        
      
};
