import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import BookLists from '../Atoms/BookLists'
import BookRatings from '../Atoms/BookRatings'
import UserComponent from '../Atoms/UserComponent'

const Home = ({ navigation }) => {
  const navigate = (val) => {
    navigation.navigate("Book", { item: val })
  }
  return (
    <View style={{ flex: 1 }}>
      <UserComponent />
      <ScrollView
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}>
        <View>
          <BookLists onPress={navigate} />
          <BookRatings onPress={navigate} />       
        </View>
      </ScrollView>
      <View style={styles.landing}>
        <Image source={require("../../assets/images/homeBottom.png")} />
        <Image source={require("../../assets/images/tagLight.png")} />
        <Image source={require("../../assets/images/cart.png")} />
        <Image source={require("../../assets/images/Settings.png")} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  landing: {
    position: 'absolute',
    borderRadius: 22,
    height: 72,
    bottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    left: 28,
    right: 28,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  }
})

export default Home
