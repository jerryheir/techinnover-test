import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import BookDetails from './BookDetails'
import PictureAtom from './PictureAtom'

const PictureCardAtom = ({ onPress, title, author, imageUrl }) => {
  return (
    <TouchableOpacity 
    activeOpacity={.9}
    onPress={onPress}
    style={style.container}>
      <PictureAtom imageStyles= {style.pictureCard} imageUrl={imageUrl} />
      <BookDetails title={title} author={author}/>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    marginRight: 24
  },
  pictureCard: {
    height: 192,
    width: 131
  }
})

export default PictureCardAtom
