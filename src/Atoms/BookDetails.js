import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BookDetails = ({author, title}) => {
  return (
    <View>
      <Text style={style.title}>{title}</Text>
      <Text style={style.author}>{author}</Text>
    </View>
  )
}

 const style = StyleSheet.create({
   title: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
    fontWeight: '500'
   },
   author: {
    fontSize: 12,
    fontFamily: "Poppins-Regular"
   }
 })

export default BookDetails
