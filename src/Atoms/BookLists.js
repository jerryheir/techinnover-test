import React from 'react'
import { ScrollView, StyleSheet,Text } from 'react-native'
import PictureCardAtom from './PictureCardAtom'

const BOOKLIST = [
  {
    imageUrl: require("../../assets/images/FashionBook.png"),
    title: "Fashionopolis",
    author: "Dona Thomas"
  },
  {
    imageUrl: require("../../assets/images/ChanelBook.png"),
    title: "Chanel",
    author: "Patrick Mauriès"
  },
  {
    imageUrl: require("../../assets/images/BlueBook.png"),
    title: "Calligraphy",
    author: "June & Lucy"
  }
]

const BookLists = ({ onPress }) => {
  return (
    <>
      <Text  style={{fontFamily: 'Poppins-SemiBold', fontSize: 24, marginTop: 58, marginHorizontal: 28 }}>Popular books</Text>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={style.listContaner}
      contentContainerStyle={{ paddingHorizontal: 28 }}
      >
        {
          BOOKLIST.map((val, index)=>{
            return (
              <PictureCardAtom 
              key={index}
              {...val}
              onPress={()=>onPress(val)}
              />
            )
          })
        }
      </ScrollView>
    </>
    
  )
}

const style = StyleSheet.create({
  listContaner: {
    marginTop: 32,
  },
  pictureCard: {
    height: 192,
    width: 131
  }
})

export default BookLists;
