import React from 'react'
import ButtonAtom from '../Atoms/ButtonAtom'
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ActionComponent from '../Atoms/ActionComponent'
import { colors } from '../Styles/Colors'

const Book = ({ navigation, route }) => {
  return (
    <View style={{ backgroundColor: colors.lighterGray, flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.top}>
            <TouchableOpacity 
            onPress={navigation.goBack}
            style={{ height: 24, width: 24 }}>
              <Image source={require("../../assets/images/back.png")} />
            </TouchableOpacity>
              <View style={styles.opt}>
                <Image source={require("../../assets/images/bigTag.png")} />
                <Image source={require("../../assets/images/options.png")} style={{ marginLeft: 34 }}/>
              </View>
            </View>
            <Image style={{marginTop: 24, height: 310, width: 212 }} source={route.params.item ? route.params.item.imageUrl : require("../../assets/images/Pinkbook.png")} />
            <View style={styles.title}>
              <Text style={{fontFamily: 'Poppins-Semibold', fontWeight: '600', fontSize: 24}}>{route.params.item ? route.params.item.title : 'Yeves Saint Laurent'}</Text>
              <Text style={{marginTop: 13, fontFamily: 'Poppins-Regular', fontSize: 14, opacity: .5}}>{route.params.item ? route.params.item.author : 'Suzy Menkes'}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8 }}>
                <Image source={require("../../assets/images/bigStar.png")} style={{ marginRight: 8 }} />
                <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14 }}>4.5
                  <Text style={{opacity: 0.5}}>/5.0</Text>
                </Text>
              </View>
              <Text style={{marginTop: 14, textAlign: 'center', fontFamily: 'Poppins-Regular', opacity: .5}}>
              A spectacular visual journey through 40 years of haute couture
              from one of the best-known and most trend-setting brands in fashion.
              </Text>
              <View style={styles.options}>
                <ActionComponent imageUrl={require("../../assets/images/preview.png")} option="Preview" />
                <ActionComponent imageUrl={require("../../assets/images/review.png")} option="Review" />
              </View>
            </View>
            <ButtonAtom  content="Buy Now for $46.99" btnStyles={styles.btnStyles} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  btnStyles:{
    backgroundColor: 'black',
    height: 60,
    width: '100%',
    color: 'white',
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    marginTop: 36
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 28,
    backgroundColor: colors.lighterGray,
    height: 812,
    paddingTop: 52
  },
  options:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 21,
    marginTop: 20
  }, 
  top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  opt:{
    flexDirection: 'row',    
  },
  title:{
    alignItems: 'center',
    marginTop: 32
  }
})


export default Book
