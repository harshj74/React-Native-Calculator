import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import icon from '../../../img/icon.jpg'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={icon} style={styles.innerimage}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      display:'flex',
      flexDirection:'column',
      height:'100%',
      width:'100%',
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
    },
    inner:{
      width:200,
      height:200,
      backgroundColor:'inherit'
    },
    innerimage:{
      width:200,
      height:200
    }

})

export default IntroScreen;
