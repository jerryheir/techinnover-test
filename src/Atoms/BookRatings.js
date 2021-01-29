import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import BookRating from './BookRating'

const BOOKLIST = [
  {
    imageUrl: require("../../assets/images/Pinkbook.png"),
    title: "Yves Saint Laurent",
    author: "Suzy Menkes"
  },
  {
    imageUrl: require("../../assets/images/YellowBook.png"),
    title: "The Book of Signs",
    author: "Rudolf Koch"
  }
]

const BookRatings = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView 
      showsVerticalScrollIndicator={false}    
      >
        <Text style={styles.header}>Newest</Text>
        {
          BOOKLIST.map((value, index)=>{
            return (
              <BookRating 
              key={index}
              {...value}
              onPress={()=>onPress(value)}
              />
            )
          })
        }
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    position: 'relative'
  },
  header: {
    fontSize: 24,
    marginHorizontal: 28,
    fontFamily: 'Poppins-SemiBold'
  },
  landing: {
    position: 'absolute',
    borderRadius: 22,
    width: '100%',
    height: 72,
    bottom: 44,
    marginLeft: 28,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})

export default BookRatings
