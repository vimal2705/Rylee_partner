// import React, { useState,useEffect } from 'react';
// import {StyleSheet, ScrollView,Text, Image, View,TextInput, TouchableOpacity,Modal} from 'react-native';


// import syncStorage from "sync-storage"
// import { Camera } from "expo-camera";
// import * as ImagePicker from "expo-image-picker";
// import * as Permissions from 'expo-permissions';
// import DropDownPicker from 'react-native-dropdown-picker';
// //redux
// import cam from "../assets/camara.png"
// import gall from "../assets/gallery.jpg"
// import cart from "../assets/mycartlogo.png"
// import Icon from "react-native-vector-icons/MaterialCommunityIcons"
// import {connect,useDispatch} from 'react-redux'
// import { addProduct } from '../action/product';
// import propTypes from 'prop-types'
// import shortid from 'shortid'

// const AddPost = ({navigation, userState,addProduct}) => {
//   let  dispatch = useDispatch()
//   const userid =syncStorage.get('user_id')
//   const  pic = [cam,gall,cart ]
//     const [productname, setproductname] = useState('vsagg')
//     const [description, setDescription] = useState('asgasd')
// const [productsize, setproductsize] = useState('adsg')
// const [productprice, setproductprice] = useState(900)
// const [productcolor, setproductcolor] = useState('agsdsd')
//     const [image, setImage] = useState([])
//     const [open, setOpen] = useState(false);
//    const [hasPermission, sethasPermission] = useState('shirt')
//    const [categories, setcategories] = useState('')
//    const [modalVisible, setmodalVisible] = useState(false)
//    const [items, setItems] = useState([
//     {label: "shirt", value: "shirt"},
//     {label:" t-shirt", value:"t-shirt"},
//     {label:"pant",value: "pant"},
//     {label: "jacket", value: "jacket"},

//   ]);


//     const frontSideImg = async() =>   {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         allowsEditing: true,
//         aspect: [4, 3],
//     allowsMultipleSelection:true, 
//         quality: 1,
//         saveToPhotos: true,
//         base64: true
//       });
  
//       if (!result.cancelled) {
//         image.push(result.uri)

//       }
      
//       getPermission()
//     }
// useEffect(() => {
//   getPermissioncam()
//   getPermission()
//   console.log('dfg',userState);
// console.log(  syncStorage.get('user_id'))
// async () => {
  
//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       alert('Sorry, we need camera roll permissions to make this work!');
//     }
  
// };
// }, [image])


// const  getPermissioncam =async () => {
//   const { status } = await Permissions.askAsync(Permissions.CAMERA);
//   console.log(status);
//   sethasPermission( status === 'granted')

// }

// const getPermission = async() => {
//   const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
//   sethasPermission( status === 'granted')
// }
//     const frontSideImgCam = async ()  =>{
//       if (hasPermission) {
//         let resultCamera = await ImagePicker.launchCameraAsync({
//           mediaTypes: ImagePicker.MediaTypeOptions.All,
//           allowsEditing: true,
//           aspect: [4, 3],
          
//           quality: 0.2,
//           saveToPhotos: true,
//           base64: true
//         });
//         console.log('dsasdasd',resultCamera.uri);
//         if (!resultCamera.cancelled) {
//   const arra = []
//   arra.push(resultCamera.uri)
//   console.log(arra);
  
//         image.push(resultCamera.uri)
      
//         console.log('asdfdgfg',image);

//         }
      
//         getPermissioncam()
//       }
  
  
//     }

   
//     const addPost = async () => {
//         try {
//             if ( !categories ||!description || !image || !productcolor || !productsize|| !productname) {
//             alert('please enter all field')
//             }

//             else{
//             dispatch(addProduct({categories ,description ,image ,productcolor ,productsize,productname,productprice}) && navigation.navigate('Home')) 
           
//             }
        

//         } catch (error) {
//             console.log(error)
        
//         }
//     }

   

//     return (
//         <View style={styles.container}>
      
//             <ScrollView contentContainerStyle={{flexGrow: 1}}>
           
//         {image.length !== 5 ?    <TouchableOpacity
//             onPress={() => setmodalVisible(true)}
//             style={{borderWidth:1,borderRadius:25,height: 150,width:200,alignSelf:'center',marginVertical: 15,justifyContent:"center",alignItems:"center"}}>


//               <Text style={{fontSize:40}}>+</Text>
//               <Text>Add Image</Text>
        
//               </TouchableOpacity>:null}
//               <Text>{image.length}/5</Text>
//               <ScrollView  style={{flexDirection:"row"}} horizontal={true}>
//              {image.map( (value) => (  
//              <View>
//                <TouchableOpacity onPress={() => {console.log( image.indexOf(value))
//               image.splice(image.indexOf(value),1)
//             }}
//             style={{backgroundColor:"#0f4c75",height:25,alignItems:"center",justifyContent:"center",flexDirection:"row",marginHorizontal:5}}
//             >
//                   <Icon name='delete' color="#FFF" size={20}/>
//                   <Text style={{color:"#FFF"}}>Delete</Text>
//                   </TouchableOpacity>
//              <Image
//              key={value}
//                   source={{uri:value}}
//                   style={styles.image}
//                   resizeMode="center"
//                 />
//                 </View>
                
//                 ))
//               }
//               </ScrollView>
             
                             
              

// <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
                 
//             setmodalVisible(!modalVisible)
//                 }}
//                 style={{alignSelf:'center',backgroundColor:"#fff"}}
//               >
//                 <View style={styles.centeredView}>
          
//                   <View style={styles.modalView}>
        
//                   <View >
//                         <TouchableOpacity onPress={
//                           () => {
//                             frontSideImgCam()
//                             setmodalVisible(false)
//                           }
//                         }>
//                       <View style={{padding:20,borderWidth:1}}>
//                       <Image style={styles.dialogBoxImage} source={require('../assets/camara.png')}></Image>
//                             <Text style={styles.dialogText}>camera</Text>
//                           </View>
                         

//                         </TouchableOpacity>
//                       </View> 
//                       <View>
//                         <TouchableOpacity onPress={
//                           () => {

//                             frontSideImg ()
//                             setmodalVisible(false)

//                           }
//                         }>
//                          <View style={{padding:20,borderWidth:1}}>
//                          <Image style={styles.dialogBoxImage} source={require('../assets/gallery.jpg')}></Image>
//                             <Text style={styles.dialogText}>gallery</Text>
//                           </View>
//                         </TouchableOpacity>
//                       </View>
//                   </View>
//                 </View>
//               </Modal>
//               <View>
//               <View style={{paddingHorizontal:30}}>
               
//                 </View>
//                 <View  style={styles.formItem}>
//                 <DropDownPicker
//                             open={open}
//                             value={categories}
//                             items={items}
//                             setOpen={setOpen}
//                             setValue={setcategories}
//                             setItems={setItems}
//                             style={{color: '#333',borderWidth:1,padding:5,borderRadius:10,marginBottom:20}}
//                             dropDownContainerStyle={{color: '#333',borderWidth:1,padding:5,borderRadius:10,marginBottom:20}}
//                             scrollViewProps={true}
//                             />
//                 <TextInput
//                     placeholder="product name"
//                     value={productname}
//                     style={{color: '#333',borderWidth:1,padding:5,borderRadius:10,marginBottom:20}}
//                     onChangeText={(text) => setproductname(text)}
//                   />
//                    <TextInput
//                     placeholder="product size"
//                     value={productsize}
//                     style={{color: '#333',borderWidth:1,padding:5,borderRadius:10,marginBottom:20}}
//                     onChangeText={(text) => setproductsize(text)}
//                   />
//                     <TextInput
//                     placeholder="product price"
//                     value={productprice}
//                     style={{color: '#333',borderWidth:1,padding:5,borderRadius:10,marginBottom:20}}
//                     onChangeText={(text) => setproductprice(text)}
//                   />
               
//                   <TextInput
//                     placeholder="product color"
//                     value={productcolor}
//                     style={{color: '#333',borderWidth:1,padding:5,borderRadius:10,marginBottom:20}}
//                     onChangeText={(text) => setproductcolor(text)}
//                   />
//                     <TextInput
//                   numberOfLines={4}
//                     placeholder="Some description..."
//                     value={description}
//                     style={{color: '#333',borderWidth:1,padding:5,borderRadius:10,marginBottom:20}}
//                     onChangeText={(text) => setDescription(text)}
//                   />
//                 </View>

    
//                 {/* {imageUploading ? (
//                   // <ProgressBar progress={uploadStatus} style={styles.progress} />
//                 ) : ( */}
//                   {/* <TouchableOpacity
                   
//                     style={styles.formItem}
//                     onPress={frontSideImg()}>
                   
//                     <Text
//                       style={{
//                         color: '#fdcb9e',
//                       }}>
//                       Choose Image
//                     </Text>
//                   </TouchableOpacity> */}
//                 {/* )} */}
    
              
//                 <TouchableOpacity
//                    style={{marginVertical: 30,backgroundColor:"#0f4c75",alignSelf:"center",alignContent:"center",borderWidth:1,paddingHorizontal:20,padding:5,borderRadius:10}}
//                    onPress={addPost}>
//                   <Text  style={{color:"#fff",fontSize:19}}>Add Product</Text>
//                 </TouchableOpacity>
              
//               </View>
//             </ScrollView>
       
//         </View>
//       );
    
// }

// const mapDispatchToProps = {
//   addProduct: (data) => addProduct(data)
// }

// const mapStateToProps = (state) => ({
//     userState: state.auth.user,
// })

// AddPost.propTypes = {
//   addProduct: propTypes.object,
//     userState: propTypes.object.isRequired
// }

// export default connect(mapStateToProps,mapDispatchToProps)(AddPost)



// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#fff',
//       flex: 1,
//       justifyContent: 'flex-start',
//     },
//     formItem: {
//       marginTop:20,
      
//       width:"70%",
//       alignSelf:"center",
//     },
//     dialogBoxImage: {
//       height: 40,
//       width: 40,
//       marginVertical: 10,
//       marginHorizontal: 20
//     },
//     dialogText: {
//       alignSelf: 'center',
//       marginHorizontal: 10,

  
//     },
//     centeredView: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
  
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       justifyContent: 'center',
//       backgroundColor: 'rgba(100,100,100, 0.9)',
//       padding: 20,
  
//     },
//     modalView: {
     
//       height: 180,
//       width:"90%",
//       backgroundColor: "white",
//       borderRadius: 20,
//       padding: 10,
//       alignItems: "center",
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2
//       },
//       flexDirection:"row",
//       justifyContent:"space-around",
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
     
//     },
//     icon: {fontSize: 20, color: '#fdcb9e'},
//     image: {width: 190, height: 150, marginHorizontal: 5},
//     progress: {width: null, marginBottom: 20},
//   });
  import { View, Text } from 'react-native';
  import React from 'react';
  
  const AddPost = () => {
    return (
      <View>
        <Text>asdasdas</Text>
      </View>
    );
  };
  
  export default AddPost;
  