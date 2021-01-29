import React from 'react'
import { Image } from 'react-native'

const PictureAtom = ({imageUrl, imageStyles}) => {
  return (
    <Image source={imageUrl } style={ imageStyles }/>
  )
}

export default PictureAtom

