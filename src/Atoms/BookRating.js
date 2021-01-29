import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import BookDetails from './BookDetails'

const BookRating = ({ imageUrl, author, title, onPress }) => {
  return (
    <TouchableOpacity 
    activeOpacity={.9}
    onPress={onPress}
    style={style.list}>
      <Image source={imageUrl} style={style.bookRating}/>
      <View style={{ flex: 1, paddingVertical: 11, paddingHorizontal: 28, justifyContent: 'space-between'}}>
        <BookDetails title={title} author={author}/>
        <Image source={require("../../assets/images/starRating.png")} />
      </View>
      <Image source={require("../../assets/images/tag.png")} style={{ marginTop: 16 }} />
    </TouchableOpacity>
    )
}

const style = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    paddingHorizontal: 28,
  },
  ratings: {
    marginTop: 28
  },
  bookRating: {
    height: 105, 
    width: 72
  }
})

export default BookRating
