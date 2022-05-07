
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";
import syncStorage from "sync-storage"
 
export const signUp = (data) => async (dispatch) => {
  console.log(data)
  const {name, phonenumber,Shopaddress,State, city,Shopname,shoptype,workingdays, email, password, endTime,pincode, starttime,Shopemailid,longitude,latitude,Shopimage,Shopimagename,Pincode} = data
    const a = await auth().createUserWithEmailAndPassword(email,password);
        a.user.sendEmailVerification();
        auth().signOut()
        let temparray = []
        temparray = Shopname.split(" ") 
        Alert.alert("Email sent")
      const uid = a.user.uid;      
       const db = firestore()
       await db
      .collection('Clients')
      .doc(uid)              
      .set({
        id: uid,             
        name:name,
        email:email,
        phonenumber:phonenumber,
       password:password,
       Shopname:Shopname,
       Shopemailid:Shopemailid,
       Shopaddress:Shopaddress,
       State:State,
       city:city,
       pincode:pincode,
       shoptype:shoptype,
       workingdays:workingdays,
       endTime:endTime,
       starttime:starttime,
      latitude:latitude,
      longitude:longitude,
      arrayname:temparray,
      Shopimage:Shopimage,
      Shopimagename:Shopimagename,
      Pincode:Pincode,
      isShop:'off'
       });
      }
 
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    // .then((data) => {
    //     console.log(data)
    //     console.log("User creation was succes")
     
    //     firebase.database()
    //     .ref('/users/' + data.user.uid)
    //     .set({
    //         name, 
    //         instaUserName,
    //         country,
    //         image,
    //         bio,
    //         uid: data.user.uid
    //     })
    //     .then(() => console.log('Data set success'))
      
    // })
    // .catch((error) => {
    //     console.error(error)
     
    // })


export const signIn = (data) => async (dispatch) => {
    console.log(data)
    const {email, password} = data

   auth()
        .signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('asdfgh',result)
                console.log("Sign in success")
                console.log('cvb',result)
                syncStorage.set('user_id',result.user.uid)
            })
            .catch((error) => {
                console.error(error)
              
            })
}

export const signOut = () => async (dispatch) => {
  auth()
    .signOut()
    .then(() => {
    console.log('sdfdf');
    })
    .catch((error) => {
        console.log(error)
      
    })
}