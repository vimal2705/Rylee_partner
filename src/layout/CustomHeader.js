import React from 'react'
import {StyleSheet,Text,
    View,TouchableOpacity} from 'react-native'


import { connect} from 'react-redux'
import propTypes from 'prop-types'
import {signOut} from '../action/auth'



const CustomHeader = ({signOut, authState, navigation}) => {
    return(
     

            <View
           
            style={{
                backgroundColor: "#0f4c75",
                height:80,alignContent:"space-around"
                
                
            }}
            >
            
                <Text style={{color:"#fff",paddingLeft:20,fontSize:20,marginTop:30,fontWeight:"bold"}}>My Cart</Text>
            
        
                {authState.isAuthenticated && (
                   <>
                   <TouchableOpacity  style={{position:"absolute",right:110,top:35}} 
                   onPress={() => navigation.navigate('AddPost')}>
                   <Text style={{color:"#fff",fontSize:17,fontWeight:"bold"}}>add product </Text>
 
               </TouchableOpacity>

                    <TouchableOpacity  style={{position:"absolute",right:20,top:35}}  onPress={() => signOut()}>
                        <Text style={{color:"red",fontSize:17,fontWeight:"bold"}}>Sign Out  </Text>
                     
                    </TouchableOpacity>
                    </>
                    
                )}

                
            </View>
    )
}

const mapStateToProps = (state) => ({
    authState: state.auth
})

const mapDispatchToProps = {
    signOut
}

CustomHeader.prototypes = {
    signOut: propTypes.func.isRequired,
    authState: propTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps )(CustomHeader)