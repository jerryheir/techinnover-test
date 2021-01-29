import React from 'react'
import { View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const InputAtom = ({ placeholder, secure }) => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(secure);
  return (
    <View>
      <TextInput 
      placeholder={placeholder} 
      style={style.input}
      secureTextEntry={secureTextEntry}
      />
      {secure && 
      <TouchableOpacity
      activeOpacity={.9}
      onPress={()=>setSecureTextEntry(!secureTextEntry)}
      style={{ width: 16, height: 11, position: 'absolute', top: 28, right: 21, zIndex: 999, }}
      >
        <Image 
        source={require('../../assets/images/eye.png')}
        style={{ width: 16, height: 11 }}
        />
      </TouchableOpacity>
      }
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    height: 46,
    alignSelf: 'center',
    borderRadius: 15,
    paddingLeft: 21,
    marginVertical: 10
  }
})

export default InputAtom
