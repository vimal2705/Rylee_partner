

import React, {useState,useEffect,useRef,useCallback} from 'react'
import {StyleSheet, ScrollView, TouchableOpacity, View ,ActivityIndicator,Image,Modal,Pressable,Platform} from 'react-native'
import Geolocation from '@react-native-community/geolocation';
import ImagePicker from 'react-native-image-crop-picker';
import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    Thumbnail,
    Icon,
    PermissionsAndroid,
    Content,
  
} from 'native-base'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from "react-native-vector-icons/Fontisto"
import { Hideo } from 'react-native-textinput-effects';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import  {TimePickerModal}  from 'react-native-paper-dates'
// import ImagePicker from 'react-native-image-picker'
//redux
import storage from '@react-native-firebase/storage'


import ActionSheet from 'react-native-actionsheet';
import database from '@react-native-firebase/database'


navigator.geolocation = require('@react-native-community/geolocation')
const initialState = {
  latitude:null,
  longitude:null,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}
const SignUp = ({navigation}) => {
  useEffect(() => {
      Geolocation.getCurrentPosition(position => {
       // alert(JSON.stringify(position))
       const {longitude,latitude} = position.coords;
       
      setCurrentPosition({
       ...CurrentPosition,
       latitude,
       longitude,
     })
     },
     error => alert(error.message),
     {timeout:20000000 ,maximumAge:1000}
     )

     }, [])

    const [cat2, setcat2] = useState([]);
    const [cataa, setcataa] = useState([])
    const [day, setday] = useState([])
    const [options2, setOptions2] = useState([]);
    const [date, setDate] = useState(new Date());
    const [starttime, setstarttime] = useState('Shop Starting Time')
    const [Time,settime] = useState('')
    const [endTime,setendtime] = useState('Shop Closing Time')
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);
    const loaction = (e => { ( e.nativeEvent.coordinate);})
    const [name, setName] = useState('')
    const [Shopname, setShopname] = useState('xxxxxxx xxxxxxx ')
    const [email, setEmail] = useState('xxxxxxxxxxxxxxx@gmail.com')
    const [phonenumber, setphonenumber] = useState('+915656565656')
    const [password, setPassword] = useState('***********')
    const [Shopemailid, setShopemailid] = useState('xxxxxxxxxxxxxxx@gmail.com')
    const [Shopaddress, setShopaddress] = useState('a-7,YYYYYY floor, xxxxxx mall ')
    const [state,setstate] = useState('')
    const [imgpath,setimgpath] = useState('')
    const [pincode, setpincode] = useState('380024')
    const [mainOptions, setMainOptions] = useState([]);
    const [Type, setType] = useState('Your State');
    const [Type2, setType2] = useState('Your City');
    const [shoptype, setshoptype] = useState('Select Shop Type')
    const [imageModal,SetImageModal] = useState(false)

    const [daystype, setdaystype] = useState('Select Your Sechdule')
    const [securedpassword ,setSecuredpassword]  = useState(true)
   
    const [options, setOptions] = useState([]);
      const [options3, setOptions3] = useState([]);
      const [options4, setOptions4] = useState([]);

    let actionSheet = useRef();
    let actionSheet2 = useRef();
    let actionSheet3 = useRef();
    let actionSheet4 =useRef();
      
    const [startvisible, setstartVisible] = useState(false)
   
    const [CurrentPosition, setCurrentPosition] = useState(initialState)
   
    const [image, setImage] = useState('')

  const [imageUploading, setImageUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null)
  const addimage = () =>{
    SetImageModal(true)
  }

  // const clickImage = async () => {
  //   ImagePicker.openCamera({
  //     width: 1200,
  //     height: 780,
  //     cropping: true,
  //   }).then((image) => {
  //     console.log(image);
  //     const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
  //     setImage(imageUri);
  //   });
  // }
  //   const chooseImage = async () => {
  //     ImagePicker.openPicker({
  //       width: 1200,
  //       height: 780,
  //       cropping: true,
  //     }).then((image) => {
  //       console.log(image);
  //       const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
  //       setImage(imageUri);
  //     });
    
      
  //     // ImagePicker.showImagePicker(options, (response) => {
  //     //     console.log('Response = ', response)

  //     //     if (response.didCancel) {
  //     //         console.log('User cancelled image picker');
  //     //       } else if (response.error) {
  //     //         console.log('ImagePicker Error: ', response.error);
  //     //       } else if (response.customButton) {
  //     //         console.log('User tapped custom button: ', response.customButton);
  //     //       } else {
  //     //         console.log(response)
  //     //         uploadImage(response)
  //     //       }
           
             
  //     // })
  // }


//   const uploadImage = async (response) => {
//     setImageUploading(true)
//     const reference = storage().ref(response.fileName)

//     const task = reference.putFile(response.path)
//     task.on('state_changed', (taskSnapshot) => {
//         const percentage = (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 1000

//         setUploadStatus(percentage)
//     })

//     task.then(async () => {
//         const url = await reference.getDownloadURL()
//         setImage({name:response.fileName,uri:url})
//         setImageUploading(false)
//     })
// }


    const onstartDismiss = useCallback(() => {
      setstartVisible(false)
    }, [setstartVisible])


    const onstartConfirm= useCallback(
      ({ hours, minutes }) => {
        setstartVisible(false);
        console.log({ hours, minutes });
        const time2 = {hours,minutes}
        setstarttime([time2.hours,':',time2.minutes])
      },
      [setstartVisible]
    );
    const [endvisible, setendVisible] = useState(false)
    const onendDismiss = useCallback(() => {
      setendVisible(false)
    }, [ setendVisible])

    const onendConfirm= useCallback(
      ({ hours, minutes }) => {
        setendVisible(false);
        console.log({ hours, minutes });
        const time1 = {hours,minutes}
        setendtime([time1.hours,':',time1.minutes])
      },
      [ setendVisible]
    );


    useEffect(() => {
      cate1();
      shopcat();
      daytype();
   
    }, [options2]);

    const cate1 = () => {
      database()
        .ref('Region')
        .on('value', snapshot => {
       
          setcat2(snapshot.val());

          setMainOptions(snapshot.val())
        });
    };
    const shopcat = () => {
      database()
        .ref('Shoptype')
        .on('value', snapshot => {
          console.log("Asd",snapshot.val());
          setcataa(snapshot.val());
          
        });
    };
    const daytype = () => {
      database()
        .ref('week')
        .on('value', snapshot => {
          setday(snapshot.val());
          
        });
    };
   
  

    const showActionSheet = () => {
      actionSheet.current.show();
    };

    const showActionSheet2 = () => {
      actionSheet2.current.show();
    };

    const showActionSheet3 = () => {
      actionSheet3.current.show();
    }
    const showActionSheet4 = () => {
      actionSheet4.current.show();
    }
    const openActionSheet = async() => {
      await setOptions2([]);
      cat2.map(item => {
        setOptions2(options2 => [...options2, item.State]);
      });
      setOptions2(options2 => [...options2, 'Cancel']);
      showActionSheet()
    };

    const openActionSheet2 = async() => {
     await setOptions([]);
      const opt = mainOptions.filter(o => o.State == state);
      const size = opt[0].cities;
      size.map(item => {
        setOptions(options => [...options, item]);
      });
      setOptions(options => [...options, 'Cancel']);
    
      let cancelButtonIndex = options.length;
    
      showActionSheet2();
    };
    const openActionSheet3 =  async() => {
    await  setOptions3([]);
      cataa.map(item => {
        setOptions3(options3 => [...options3, item.type]);
      });
      setOptions3(options3 => [...options3, 'Cancel']);
      showActionSheet3()
    };
    const openActionSheet4 = async () => {
    setOptions4([]);
    await   day.map(item => {
        setOptions4(options4 => [...options4, item.days]);
      });
      setOptions4(options4 => [...options4, 'Cancel']);
      showActionSheet4()
    };

    

    const doSignUp = async () => {
  
        navigation.navigate('Detail',{
          name:name,
          email:email,
          phonenumber:phonenumber,
          Shopname:Shopname,
          Shopemailid:Shopemailid,
          Shopaddress:Shopaddress, 
          password:password,
          starttime:starttime,
          endTime:endTime,
          State:Type,
          city:Type2,
          pincode:pincode,
          shoptype:shoptype,
          workingdays:daystype,
          longitude:CurrentPosition.longitude,
          latitude:CurrentPosition.latitude,
          // Shopimage:image.uri,
          // Shopimagename:image.name,
          Pincode:pincode
        })
    }
   
    return CurrentPosition.latitude ? (
      
        <View style={styles.container}>
             {/* <Modal
        animationType="fade"
        transparent={true}
        visible={imageModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          SetImageModal(!imageModal);
        }}
      >
        
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity  style={{position:"absolute",right:20, top:20}} onPress={() => SetImageModal(!imageModal)}>
            <Ionicons name="close-circle" size={30}  />
            </TouchableOpacity>
            <Text style={styles.modalText}>set shop board image or shop logo</Text>
            <View style={{flexDirection:"row",alignItems:"center",alignContent:"space-between",alignSelf:"center"}}>
            <TouchableOpacity onPress={()=> clickImage() } style={{borderWidth:1,padding:20,marginLeft:15,borderRadius:10}}>
           <Fontisto name="camera" size={40} color="#0BA5FE" style={{alignSelf:"center"}} />
           <Text style={{marginTop:10}}>open camera</Text>
             </TouchableOpacity>  
             <TouchableOpacity onPress={()=> chooseImage() } style={{borderWidth:1,padding:20,marginLeft:15,borderRadius:10}}>
             <Fontisto name="photograph" size={40} color="#0BA5FE" style={{alignSelf:"center"}}/>
             <Text style={{marginTop:10}}>open gallary</Text>
             </TouchableOpacity>
           </View>   
          </View>
        </View>
      </Modal>
         
         */}
            <ScrollView contentContainerStyle={{flexGrow: 1,marginTop:60}}>
              {/* {image != null ?(
                <View style={styles.imageContainer}>
               
                  <Thumbnail large source={{uri: image.uri}}  />
                
              </View>

             ):(
               <TouchableOpacity style={{alignSelf:"center",marginTop:60}} onPress={addimage} >
                 <Image source={require('../assets/arrow.png')}/>
                </TouchableOpacity>
               )} 
            */}
    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <Entypo name={"chevron-left"} size={30} style={{marginLeft:25,}}/>
    </TouchableOpacity>
    <Text style={{marginLeft:30,fontSize:20,fontWeight:"600",marginTop:20}} >
               Create Account To Start 
             </Text> 
             <Text style={{marginLeft:30,fontSize:20,fontWeight:"600",marginTop:2}}>
             Journey With <Text style={{color:"#0BA5FE",fontSize:25}}>Rylee</Text> 
             </Text>
              <Form>
              <View style={{margin:10,marginLeft:20 ,marginTop:20,alignItems:"center"}}>
                
              
        
      
              <Hideo
          placeholder="your full name"
          value={name}
        
          onChangeText={(text) => setName(text)}
          iconClass={Ionicons}
          iconName={"person-sharp"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          style={{margin:5,fontSize:10,color: '#eee'}}       
          inputStyle={{ color: "#464949",fontSize:17 }}
          iconSize={25}
        
        />
           <Hideo
        placeholder="Email"
          iconClass={MaterialCommunityIcons}
          iconName={"email"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#464949",fontSize:17}}
          iconSize={25}
          value={email}
          style={{margin:5,fontSize:10}}       
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={() => refpassword.current._root.focus()}
          returnKeyType={'next'}
        />
            <Hideo
        placeholder="phone number"
          iconClass={MaterialCommunityIcons}
          iconName={"phone"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#464949",fontSize:17 }}
          iconSize={25}
          value={phonenumber}
          style={{margin:5,fontSize:10}}       
          onChangeText={(text) => setphonenumber(text)}
          onSubmitEditing={() => refpassword.current._root.focus()}
          returnKeyType={'next'}
        />
          <View style={{flexDirection:"row",alignSelf:"center",justifyContent:"center"}}>
            <Hideo
          placeholder="Password"
          style={styles.input}
          iconClass={MaterialCommunityIcons}
          iconName={"account-lock"}
          iconColor={"white"}
          iconSize={25}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#464949" }}
          value={password}
          style={{margin:5,fontSize:10}}       
          secureTextEntry={securedpassword}
           
          onChangeText={(text) => setPassword(text)}
          
       /> 
      
       <TouchableOpacity
                     style={{position:"absolute",right:10,top:13}}
       onPress={() => {setSecuredpassword(!securedpassword)}} > 
          <MaterialCommunityIcons name={!securedpassword ?"eye-off" :"eye"} color="#111" style={{fontSize:25,justifyContent:"center", marginRight:10}}/> 
          
     </TouchableOpacity>
     </View>
     <Hideo
          placeholder="your Shop name"
          value={Shopname}
          style={{color: '#eee'}}
          onChangeText={(text) => setShopname(text)}
          iconClass={MaterialCommunityIcons}
          iconName={"store"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#464949",fontSize:17 }}
          iconSize={25}
          style={{margin:5,fontSize:10}}        
        />
          <Hideo
          placeholder="shop email id"
          value={Shopemailid}
          style={{color: '#eee'}}
          onChangeText={(text) => setShopemailid(text)}
          iconClass={MaterialCommunityIcons}
          iconName={"email-open-multiple"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#464949",fontSize:17 }}
          iconSize={25}
          style={{margin:5,fontSize:10}}       
        />
         <Hideo
          placeholder="shop address"
          value={Shopaddress}
          style={{color: '#eee'}}
          onChangeText={(text) => setShopaddress(text)}
          iconClass={MaterialCommunityIcons}
          iconName={"home-map-marker"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#464949",fontSize:17 }}
          iconSize={25}
          style={{margin:5,fontSize:10}}       
        />
          <Hideo
          placeholder="Pincode"
          value={pincode}
          style={{color: '#eee'}}
          onChangeText={(text) => setpincode(text)}
          iconClass={Entypo}
          iconName={"location"}
          iconColor={"white"}
          iconBackgroundColor={"#0BA5FE"}
          inputStyle={{ color: "#464949",fontSize:17 }}
          iconSize={25}
          style={{margin:5,fontSize:10}}       
        />
                 </View >

                 <View  style={{flex:1,
  
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    margin:5 ,    borderRadius:20,height:260,width:"85%" ,backgroundColor:"#fff",justifyContent:"flex-end",marginTop:-2}}>
             <Text style={{fontSize:20,marginBottom:15}}>  set your shop loaction</Text>
                 <View style={{height:"80%",width:"100%" ,alignSelf:"center"}}>
           
              <MapView
          style={{height:"100%",width:"100%",
          borderRadius:20 
        }}
          provider={PROVIDER_GOOGLE}
          initialRegion={ CurrentPosition }
          showsUserLocation
          showsMyLocationButton
           zoomEnabled={true}
         >
             <Marker
            draggable
            coordinate={CurrentPosition}
            onDragEnd={e => {
              console.log('dragEnd', e.nativeEvent.coordinate);
              const latitude = e.nativeEvent.coordinate.latitude
              const longitude = e.nativeEvent.coordinate.longitude
              setCurrentPosition({
                ...CurrentPosition,
                latitude,
                longitude,
              })
            }}
            zoomEnabled={true}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
         </MapView>
              </View>


</View>

<View style={[styles.formItem,{height:45,width:"85%",alignSelf:"center"}] }>
          
            <TouchableOpacity style={{ flexDirection: "row",alignItems:"flex-end",justifyContent:"space-between",width:"100%"}} onPress={openActionSheet}  >
   <View>

                <Text style={{marginLeft:10}} >
                  {Type}
                </Text>
                </View>
                <Text>▼</Text>
    
            </TouchableOpacity>
          </View>

      <ActionSheet
        ref={actionSheet}
        title={
          "  Which one do you like?"
        }
        options={options2}
        cancelButtonIndex={options2.length - 1}
        destructiveButtonIndex={options2.length - 1}
        onPress={index => {
            if (index != options2.length-1) {
              setstate(options2[index]);
              setType(options2[index])
        }
        }}
      />
        <View style={[styles.formItem,{height:45,width:"85%",alignSelf:"center"}] }>

        <TouchableOpacity style={{ flexDirection: "row",alignItems:"flex-end",justifyContent:"space-between",width:"100%"}} onPress={openActionSheet2}  >
              
                <Text  style={{marginLeft:10}}>
                  {Type2}
                </Text>
                <Text>▼</Text>
  
            </TouchableOpacity>
          </View>
      <ActionSheet
        ref={actionSheet2}
        title={
            "in which city your shop is?"
        }
        options={options}
        cancelButtonIndex={options.length - 1}
        destructiveButtonIndex={options.length - 1}
        onPress={index => {
            if (index != options.length-1) {
            setType2(options[index])
            }
        }}
      />
   

   <View style={[styles.formItem,{height:45,width:"85%",alignSelf:"center"}] }>

<TouchableOpacity style={{ flexDirection: "row",alignItems:"flex-end",justifyContent:"space-between",width:"100%"}}  onPress={openActionSheet3}  >
            
                       <Text  style={{marginLeft:10}}>
                  {shoptype}
                </Text>
                <Text >▼</Text>

            </TouchableOpacity>
          </View>
          <ActionSheet
          ref={actionSheet4}
          title={' select type of Shop ?'}
          options={options4}
          cancelButtonIndex={options4.length - 1}
          destructiveButtonIndex={options4.length - 1}
          onPress={index => {
            if (index != options4.length-1) {
              setdaystype(options4[index]);
  
        }}}
        />
      <ActionSheet
        ref={actionSheet3}
        title={
  "          select type of Shop"

        }
        options={options3}
        cancelButtonIndex={options3.length - 1}
        destructiveButtonIndex={options3.length - 1}
        onPress={index => {
            if (index != options3.length-1) {
              setshoptype(options3[index]);

        }
        }}
      />   
   <View style={[styles.formItem,{height:45,width:"85%",alignSelf:"center"}] }>

<TouchableOpacity style={{ flexDirection: "row",alignItems:"flex-end",justifyContent:"space-between",width:"100%"}}  onPress={openActionSheet4}  >
           
             <Text  style={{marginLeft:10}}>
                {daystype}
              </Text>
              <Text >▼</Text>
  
          </TouchableOpacity>
        </View>

    <ActionSheet
          ref={actionSheet4}
          title={' select type of Shop ?'}
          options={options4}
          cancelButtonIndex={options4.length - 1}
          destructiveButtonIndex={options4.length - 1}
          onPress={index => {
            if (index != options4.length-1) {
              setdaystype(options4[index]);
  
        }}}
        />
    
    <View style={{flex:1,flexDirection:"row" ,marginTop:-15}}>
<View style={[styles.formtime,{marginLeft:15,marginTop:14,marginRight:10 ,height:45}] }>
          
            <TouchableOpacity  onPress={()=> setstartVisible(true)}  >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text >
                  {starttime}
                </Text>
                
              </View>
            </TouchableOpacity>
          </View>
<Text style={{marginTop:25,fontWeight:"bold"}}>To</Text>
      
        <View style={[styles.formtime1,{marginLeft:10,marginTop:14,marginRight:15 ,height:45}] }>

            <TouchableOpacity onPress={()=> setendVisible(true)} >
            
                <Text  >
                {endTime}
                </Text>
                
            
            </TouchableOpacity>
          </View>
      
      </View>  

            
     

      <TimePickerModal
        visible={startvisible}
        onDismiss={onstartDismiss}
        onConfirm={onstartConfirm}
        hours={12} // default: current hours
        minutes={14} // default: current minutes
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale={'en'} // optional, default is automically detected by your system   
      />
       <TimePickerModal
        visible={endvisible}
        onDismiss={onendDismiss}
        onConfirm={onendConfirm}
        hours={12} // default: current hours
        minutes={14} // default: current minutes
        label="Select time" // optional, default 'Select time'
        cancelLabel="Cancel" // optional, default: 'Cancel'
        confirmLabel="Ok" // optional, default: 'Ok'
        animationType="fade" // optional, default is 'none'
        locale={'en'} // optional, default is automically detected by your system   
      />
    
     
                 {/* <Button style={{ 
                width:"60%",
                shadowColor: 'rgba(0,0,0, .9)', // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 10, //IOS
                 backgroundColor: '#0BA5FE',
                elevation: 8, // Android
                marginBottom:10,
                justifyContent:"center",
                alignItems: 'center',
              alignSelf:"center"}}
                 rounded

                 onPress={doSignUp}
                 >
                <Text style={{color:"#fff" ,fontWeight:"bold",fontSize:15}}>SIGN UP</Text>
              </Button>

            */}

<TouchableOpacity                 
              style={email.length == 0 && password.length == 0 ? {marginTop: 20,backgroundColor:"#E4E4E4",alignSelf:"center",alignContent:"center",paddingHorizontal:20,padding:5,borderRadius:25,height:50,justifyContent:"center"}:
            {marginTop: 20,backgroundColor:"#0BA5FE",alignSelf:"center",alignContent:"center",paddingHorizontal:20,padding:5,borderRadius:25,height:50,justifyContent:"center",}
            }
               onPress={doSignUp}>
                 <View style={{flexDirection:"row"}}>
                <Text style={email.length === 0 && password.length == 0 ? {color:"#111",fontSize:19}: {color:"#fff",fontSize:19}}>Continue   </Text>
                <MaterialCommunityIcons name={"arrow-right"} color={email.length === 0 && password.length == 0 ? "#111" : "#fff"} style={{fontSize:25,}}/> 
                </View>
              </TouchableOpacity>
              </Form>
              <View style={{alignSelf:"center",marginTop:20}}>
                <Text style={{color:"#666"}}>By signing up, you agree to our </Text>
            
              </View>
              <View style={{flexDirection:"row",alignSelf:"center",marginBottom:80}}>

  
<Text style={{marginRight:5,fontWeight:"700",color:"#666"}}>Terms & Condition</Text>
<Text style={{marginRight:5,fontWeight:"700",color:"#666"}}>,</Text>
<Text style={{marginRight:5,fontWeight:"700",color:"#666"}}>Privacy Policy</Text>
</View>
        
            </ScrollView>
       
        </View>
      ): <ActivityIndicator style={{flex:1}} animating size="large"/>
    
}

export default SignUp



const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      flex: 1,
      justifyContent: 'flex-start',
    },
    imageContainer: {
      alignSelf:"center",
      alignItems: 'center',
      marginVertical: 5,
    },
    progress: {width: null, marginBottom: 20},
    formItem: {
      marginTop: 10,
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius:20

    },
    formItem1: {
      marginBottom: 20,
     

       justifyContent: 'center',
       alignItems: 'center',
     
       borderRadius:20

    },
    
    formtime: {
      marginBottom: 20,
      width:"40%",
 
       justifyContent: 'center',
       alignItems: 'center',
     
       borderRadius:20

    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      
    },

    buttonClose: {
      backgroundColor: "#2196F3",
      marginTop:40
    },
    textStyle: {
      color: "#000",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    formtime1: {
      marginBottom: 20,
      width:"40%",
       justifyContent: 'center',
       alignItems: 'center',
     
       borderRadius:20

    },
    centeredView: {
      flex: 1,
      alignItems: "center",
      marginTop: 30
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    mapStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });