import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ActionComponent = ({imageUrl, option}) => {
  return (
    <View style={styles.btn}>
      <Image source={imageUrl} />
      <Text style = {{ marginLeft: 20, fontFamily:'Poppins-Regular', fontSize: 14 }}>{option}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 152,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 11
  }
})


export default ActionComponent
