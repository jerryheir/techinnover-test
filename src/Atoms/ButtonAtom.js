import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const ButtonAtom = ({ content, btnStyles, onPress }) => {
  return (
    <TouchableOpacity 
    activeOpacity={.7} 
    style={btnStyles}
    onPress={onPress}
    >
      <Text style={styles.text}>{content}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
text: {
  color: "white",
  fontFamily: 'Poppins-SemiBold',
  fontSize: 16,
  fontWeight: '500',
}
})
export default ButtonAtom
 