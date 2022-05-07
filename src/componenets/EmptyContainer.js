import React from 'react'
import {StyleSheet, Text,View,ActivityIndicator} from 'react-native'


const EmptyContainer = () => {
    return(
        <View style={styles.emptyContainer}>
         <ActivityIndicator/>
        </View>
    )
}

export default EmptyContainer

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        backgroundColor: "#1b262c",
        justifyContent: 'center',
        alignItems: "center"
    }
})