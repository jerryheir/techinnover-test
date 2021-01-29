import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const UserComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={require("../../assets/images/Justine.png")} />
        <Text style={styles.greeting} >Hi, Dustin</Text>
      </View>
      <Image source={require("../../assets/images/Search.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 44,
    paddingHorizontal: 28,
    width: '100%',
    height: 40,
    alignItems: 'center'
  },
  user:{
    flexDirection: 'row'
  },
  greeting: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 12,
    marginTop: 10
  }
})

export default UserComponent
