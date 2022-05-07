import React ,{useEffect,useState}from 'react'
import { View, Text ,StyleSheet,FlatList,Image, TouchableOpacity} from 'react-native'

import * as firebase from 'firebase'
const Post = ({item, userDetails}) => {
    useEffect(() => {
        console.log('dfg',item)
      }, [])

    return (
      <>
      {/* {!item.discount_percentage ?null :<View style={{borderTopRightRadius:4,borderBottomRightRadius:4,position:"absolute",height:18,zIndex:1,backgroundColor:"#8cc63f",width:60,justifyContent:"center",alignItems:"center",alignContent:"center"}}>
                    <Text numberOfLines={1} style={{color:"#fff",fontWeight:"900",fontSize:12,alignSelf:"center"}}> {item.discount_percentage}% {i18n.t('off')}   </Text>
                  </View>} */}
                                       

                                           

                                              
                                              {/* // onPress={
                                              //     () => {
                                              //         props.navigation.navigate('product',{ product: item} )
                                              //         // props.navigation.navigate('ProductScreen', { product: item, similarProducts: newArrival })
                                              //     }
                                              // }> */}
                                                  <View style={{ height: 150, width: 175, alignSelf: 'center' }}>
                                              <Image style={{ marginTop: 5, height: 150, width: 175}} source={{ uri: item.image }}/>
{/*                                             

                                                  {!item.img ? 
                           <ImageBackground style={{ marginTop: 5, height: 84, width: 74 }} source={require('../../assets/PerffectLogoholder.png') }> 
                           {item.is_out_of_stock === false ? 
                                <Image style={{height:84,width:74,alignSelf:'center'}} source={i18n.locale==='en'?require('../../assets/Out_Of_Stock.png') :i18n.locale==='gu'?require('../../assets/Out_Of_Stock_guj.png'):require('../../assets/Out_Of_Stock_hi.png')}/> : null }
                              </ImageBackground>
                             :<ImageBackground style={{ marginTop: 5, height: 84, width: 74 }} source={{ uri: item.img }}>
                                {item.is_out_of_stock === false ? 
                                <Image style={{height:84,width:74,alignSelf:'center'}} source={i18n.locale==='en'?require('../../assets/Out_Of_Stock.png') :i18n.locale==='gu'?require('../../assets/Out_Of_Stock_guj.png'):require('../../assets/Out_Of_Stock_hi.png')}/> : null }
                              </ImageBackground>} */}
                                                     
                                                  </View>
                                                  <View style={{ marginTop: 10 }}>
                                                      <Text style={{alignSelf:"center"}}>{item.name}</Text>
                                                      <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                            <Text style={{alignSelf:'center',marginTop:10,marginLeft:10}}>{`\u20B9${item.price}`}</Text>
                            <Text style={{alignSelf:'center',marginTop:10,marginRight:10}}>{item.size}</Text>
                           </View>
                                                      {/* <Text style={{ alignSelf: 'center', fontSize: 14, fontFamily: 'MontserratSemiBold', fontWeight: '500', marginTop: 6, marginHorizontal: 3 }}>


                                                        

                                                      </Text>
                                                      <Text style={{ alignSelf: 'center', fontFamily: 'Montserrat',paddingBottom:7 }}>{`\u20B9${parseFloat(item.pro_price).toFixed(2)}`}</Text> */}
                                                  </View>
                                              </>
                                      
       
    )
}

export default Post


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'white'
    },
    section1: {
        height: 70,
     
        marginTop: 25,
        alignItems:"center",
        flexDirection: 'row'
    },
    section2: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    section3: {
        width: '100%',
        marginTop:-10,
        marginBottom:20
    },
    containernew: {
        height: '100%',

        justifyContent: 'center'
    },
    box: {
        height: 150,
        width: 100,

        marginRight: 15
    },
    text: {
        alignSelf: 'center',
        paddingHorizontal:10,
        fontWeight: '400',
        fontFamily: 'Montserrat'

    },
    innerBox: {
        height: 100,
        borderRadius: 12,
        backgroundColor: '#F7F8F9',
        justifyContent: 'center',

        marginBottom: 10
    },
    section4: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        padding: 10,
        justifyContent: 'center'


    },
//     ModalContainer :{

  
 
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     opacity:0.9,
// },
    fadingContainer: {
        padding: 10,
        backgroundColor: "#f7f7f7",
          borderRadius:25,
           position:"absolute",
            bottom:55,
            alignSelf:"center",
            shadowColor: "#2222",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation:15,
            shadowOffset: {
              height: 1,
              width: 1
            },
      },
      fadingText: {
        fontSize: 15
      },
    newArrival: {
        width: '48%',
        borderWidth: 1,
        borderColor: '#E9E9E9',
      margin:2,
    
    },
    heart: {
        alignSelf: 'flex-end',
        marginRight: 4,
        
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 250,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(100,100,100, 0.9)',
        padding: 20,

      },
      modalView: {
        height: 200,
        width:"85%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
       
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
     
        height:30,
        borderRadius: 20,
        padding: 4,
        elevation: 2,
        marginTop:20
      
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        width:200,
        alignSelf:"center",
        backgroundColor: "#005478",
      },
      textStyle: {
        color: "white",
       
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      blurView:{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
        }
    
})