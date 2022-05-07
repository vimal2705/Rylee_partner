import React, {useEffect} from 'react'

import 'react-native-gesture-handler'

import store from './src/store'
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

import {Provider} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {useDispatch, connect} from 'react-redux'

// import AddPost from './screens/AddPost'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/SignUp'
import Home from './src/screens/Home'
import CustomHeader from './src/layout/CustomHeader'
import DetailScreen from './src/screens/DetailScreen';


import {SET_USER, IS_AUTHTHENTICATED} from './src/action/action.types'


import EmptyContainer from './src/componenets/EmptyContainer'
import AddPost from './src/screens/AddPost'




 


const Stack = createStackNavigator();

const Root=({authState}) => {

  const dispatch = useDispatch();


  const onAuthStateChanged = (user) => {
    if (user) {
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: true
      })

      console.log(user.uid)

      firestore()
        .collection('admin')
        .doc(user.uid)
        .get()
        .then((snapshot) => {
          console.log('USER DETAILS', snapshot.data())
          dispatch({
            type: SET_USER,
            payload: snapshot.data(),
          })
        })


    } else {
      dispatch({
        type: IS_AUTHTHENTICATED,
        payload: false
      })
    }
  }

  useEffect(() => {
    // requestPermission()
    const susbcriber = auth().onAuthStateChanged(onAuthStateChanged)
    return susbcriber;
  }, [])

  if (authState.loading) {
      return <EmptyContainer/>
  }

    return(
        
        <>
                
        <NavigationContainer>
          <Stack.Navigator
        // screenOptions={{
        //     header: (props) => <CustomHeader {...props} />,
        //   }}
        screenOptions={{
          headerShown: false
        }}
          >
           
                  {authState.isAuthenticated ? (
              <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddPost" component={AddPost} />
              {/* <Stack.Screen name="myorders" component={myorders}/>
              <Stack.Screen name="myproducts" component={myproducts}/>
              <Stack.Screen name="orderscreen" component={orderscreen}/>
            <Stack.Screen name="product" component={product} />
            <Stack.Screen name="EditPost" component={EditPost}/> */}
              </>
            ) : (
              <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen  name="Detail" component={DetailScreen} /> 
              </>
            )}
            
         
          </Stack.Navigator>
        </NavigationContainer>
    
        </>  
        
    )
}

const mapStateToProps = (state) => ({
  authState: state.auth
})

export default connect(mapStateToProps)(Root)