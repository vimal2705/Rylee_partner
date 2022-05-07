import React, {useEffect, useState} from 'react'
import {ActivityIndicator,Alert,PermissionsAndroid,Platform,  Image,SafeAreaView,TouchableOpacity, Text,StyleSheet, View} from 'react-native';

import {
    Container,
    Form,
    Item,
    Button,
    Thumbnail,
    Content,
} from 'native-base'
import Entypo from "react-native-vector-icons/Entypo";
import propTypes from 'prop-types'
import {signUp} from '../action/auth'
import {connect} from 'react-redux'
import storage from '@react-native-firebase/storage'


import { ScrollView } from 'react-native';


const Detailscreen =  ({route,signUp,navigation}) => {
    const {name, phonenumber,Shopaddress,State, city,Shopname,shoptype,workingdays, email, password, endTime, pincode,starttime,Shopemailid,longitude,latitude,Shopimage,Shopimagename,Pincode} = route.params;
    const register = async () => {
        signUp({name, phonenumber,Shopaddress,State, city,Shopname,shoptype,workingdays, email, password,pincode, endTime, starttime,Shopemailid,longitude,latitude,Shopimage,Shopimagename,Pincode})
        navigation.navigate('Signin')
      }
     
    

return (
    <Container style={styles.container}>
     

    <Form style={{alignItems:'center',flex:1,marginTop:50,width:"100%",backgroundColor:"pink"}}>
        <Text style={{fontSize:30,fontWeight:"600"}}>Rylee Certificate </Text>
        <Item  style={styles.formItem}>
        <Text style={{fontSize:18,alignSelf:"flex-start"}}>Mr/ Mr.s/ Miss<Text style={{fontWeight:"bold"}}> {name} </Text>
        {"\n"}is the Owner of 
        <Text style={{fontWeight:"bold"}}> {Shopname} </Text>
        {"\n"}at 
        <Text style={{fontWeight:"bold"}}>  {city}</Text> ,
        <Text style={{fontWeight:"bold"}}> {State}</Text>
        {"\n"} pincode=
        <Text style={{textDecorationLine: 'underline',fontWeight:"bold"}}>{pincode}</Text>

        
        </Text>
        </Item>
        
      <View style={{backgroundColor:"#ed2",width:"98%"}}>
        <Item  style={styles.formItem}>
 <Text >Register email-id:{email}</Text>
 </Item>

      <Text >Register mobile no: {phonenumber}</Text>
       
       
     
 <Item  style={styles.formItem}>
        <Text style={{textDecorationLine: 'underline',fontWeight:"bold"}}>{Shopemailid}</Text>
       
       
     
      
     
      
       
        <Text style={{textDecorationLine: 'underline',fontWeight:"bold"}}>{shoptype}</Text>
       
        <Text style={{textDecorationLine: 'underline',fontWeight:"bold"}}>{workingdays}</Text>
      
        <Text style={{textDecorationLine: 'underline',fontWeight:"bold"}}>{starttime}</Text>
      
        <Text style={{textDecorationLine: 'underline',fontWeight:"bold"}}>{endTime}</Text>
</Item></View>
        <Button style={{ 
                width:"60%",
                shadowColor: 'rgba(0,0,0, .9)', // IOS
                shadowOffset: { height: 1, width: 1 }, // IOS
                shadowOpacity: 1, // IOS
                shadowRadius: 10, //IOS
                 backgroundColor: '#13A6F1',
                elevation: 8, // Android
                marginBottom:170,
                justifyContent:"center",
                alignItems: 'center',
              alignSelf:"center"}}
                 rounded onPress={register}>
                <Text style={{color:"#fff" ,fontWeight:"400",fontSize:15}}>register</Text>
              </Button>
       
       
  
        
        </Form>


    </Container>
    
);
}

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}

Detailscreen.propTypes = {
    signUp: propTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Detailscreen)
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    }, titleText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
    },
    textStyle: {
      fontSize: 18,
      padding: 10,
      color: 'black',
      textAlign: 'center',
    },
    imageStyle: {
      width: 150,
      height: 150,
      margin: 5,
      resizeMode: 'stretch',
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 5,
    },
    progress: {width: null, marginBottom: 20},
    formItem: {
      marginTop: 30,
      alignSelf:"flex-start"

    },
  });

  