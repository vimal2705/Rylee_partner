import React, {useState,useEffect} from 'react'
import {   View,StyleSheet,Text,Button, ScrollView, Image, TouchableOpacity,TextInput} from 'react-native'
import logo from "../assets/mycartlogo.png"
import {connect} from 'react-redux'
import {signIn} from '../action/auth'
import propTypes from 'prop-types'
import { Hideo } from 'react-native-textinput-effects';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database'
const SignIn = ({navigation, signIn}) => {

  useEffect(() => {

   console.log("asdasd");
   database()
      .ref('Region')
      .on('value', snapshot => {
        
        console.log('snapshot',snapshot.val());// setcat2(snapshot.val());
        // setMainOptions(snapshot.val())
      });

   }, [])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [securedpassword ,setSecuredpassword]  = useState(true)
    const doSignIn = () => {
        signIn({email, password})
    }


    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
          
            <Image
              source={logo}
              style={{width: null, height: 250, marginTop: 50}}
              resizeMode="contain"
            />
    
      
    
            <View style={{justifyContent:"center",marginTop:20}}>
        
        <Hideo
        placeholder="enter your registerd email"
          iconClass={MaterialCommunityIcons}
          iconName={"email"}
          iconColor={"white"}
          iconBackgroundColor={"#13A6F1"}
          inputStyle={{ color: "#464949",fontSize:17 }}
          iconSize={25}
          value={email}
          style={{margin:5,fontSize:10,justifyContent:"center"}}       
          onChangeText={(text) => setEmail(text)}
          // onSubmitEditing={() => refpassword.current._root.focus()}
          // returnKeyType={'next'}
        />
        <View style={{flexDirection:"row", width:"90%",alignSelf:"center",justifyContent:"center",marginTop:15}}>
            <Hideo
          placeholder="Password"
          style={styles.input}
          iconClass={MaterialCommunityIcons}
          iconName={"account-lock"}
          iconColor={"white"}
          iconSize={25}
          iconBackgroundColor={"#13A6F1"}
          inputStyle={{ color: "#464949" }}
          value={password}
          secureTextEntry={securedpassword}
           
          onChangeText={(text) => setPassword(text)}
          
       /> 
      
       <TouchableOpacity
                     style={{position:"absolute",right:10,top:13}}
       onPress={() => {setSecuredpassword(!securedpassword)}} > 
          <MaterialCommunityIcons name={!securedpassword ?"eye-off" :"eye"} color="#111" style={{fontSize:25,justifyContent:"center", marginRight:10}}/> 
          
     </TouchableOpacity>
     </View>
              
              
              </View>
              <TouchableOpacity                 
              style={email.length == 0 && password.length == 0 ? {marginTop: 60,backgroundColor:"#E4E4E4",alignSelf:"center",alignContent:"center",paddingHorizontal:20,padding:5,borderRadius:25,height:50,justifyContent:"center"}:
            {marginTop: 60,backgroundColor:"#13A6F1",alignSelf:"center",alignContent:"center",paddingHorizontal:20,padding:5,borderRadius:25,height:50,justifyContent:"center",}
            }
               onPress={doSignIn}>
                 <View style={{flexDirection:"row"}}>
                <Text style={email.length === 0 && password.length == 0 ? {color:"#111",fontSize:19}: {color:"#fff",fontSize:19}}>Continue   </Text>
                <MaterialCommunityIcons name={"arrow-right"} color={email.length === 0 && password.length == 0 ? "#111" : "#fff"} style={{fontSize:25,}}/> 
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{position:"absolute",bottom:20,alignSelf:"center",alignContent:"center"}}>
                <Text style={{color: '#111', textAlign: 'center'}}>
                  Do not have an account, SignUp here
                </Text>
              </TouchableOpacity>
       
          </ScrollView>
        </View>
      );
}

const mapDispatchToProps = {
    signIn: (data) => signIn(data)
}

SignIn.propTypes = {
    signIn: propTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#008fff',
      marginHorizontal: 5,
      marginTop: 30,
      fontWeight:"bold"
    },
    formItem: {
      marginBottom: 20,
      alignSelf:"center",

    },
  });
  