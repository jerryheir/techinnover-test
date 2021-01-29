import React from 'react'
import { View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import ReactNativeBiometrics from 'react-native-biometrics'
import ButtonAtom from '../Atoms/ButtonAtom'
import InputAtom from '../Atoms/InputAtom'
import { colors } from '../Styles/Colors'

const Login = ({ navigation }) => {
  const [bio, setBio] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(()=>{
    checker();
  }, []);
  const checker = () => {
    const biometrics = async () => {
      const { biometryType } = await ReactNativeBiometrics.isSensorAvailable();
      setBio(biometryType);
    }
    biometrics();
  }
  const authenticate = async () => {
    setLoading(true)
    if (bio){
      const { publicKey } = await ReactNativeBiometrics.createKeys('Confirm fingerprint');
      if (publicKey) {
        setLoading(false);
        return navigation.navigate('Home');
      } else {
        setTimeout(()=>{

        }, 5000)
      }
    } else {
      setLoading(false);
      alert("No biometrics available");
    }
  }
  return (
    <KeyboardAvoidingView 
    // behavior={"height"}
    style={{ flex: 1 }}>
      {loading && <View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .5)'
      }}>
        <View style={{
          backgroundColor: colors.white,
          height: 100,
          width: 100,
          borderRadius: 11,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator 
          color={colors.black}
          size={"large"}
          />
        </View>
      </View>}
      <ImageBackground
        source={require('../../assets/images/Login.png')}
        resizeMode="stretch"
        resizeMethod="auto"
        style={{ flex: 1, justifyContent: 'flex-end' }}
        >
        <View style={{ paddingHorizontal: 28, paddingBottom: 75, fontFamily: 'Poppins-SemiBold' }}>
          <Text style={styles.title}>Adventures in Literature</Text>
          <Text style={{ fontSize: 12, color: colors.white, marginTop: 35 }}>Join our community</Text>
        </View>
        <View style = {styles.form}>
            <Text style = {{paddingLeft: 10, paddingTop: 10, fontFamily: 'Poppins-SemiBold', fontSize: 16, fontWeight: '600'}}>Login</Text>
            <InputAtom 
            placeholder="Email"
            />
            <InputAtom 
            placeholder="**************"
            secure={true}
            />
            <ButtonAtom 
            content="Sign In" 
            btnStyles = {styles.btnStyle}
            onPress={()=>navigation.navigate('Home')}
            />
            <TouchableOpacity 
            activeOpacity={.7}
            onPress={authenticate}
            style={{ height: 32, width: 24, ...styles.frame }}
            >
              <Image source = {require("../../assets/images/Frame.png")} />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.black,
    height: 46,
    width: '100%',
    color: 'white',
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },text: {
    color: "white",
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: '500',
  },
  form: {
    backgroundColor: colors.white,
    height: 351,
    width: '100%',
    borderTopEndRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: 41,
    paddingTop: 20,
    paddingBottom: 10
  },
  frame: {
    alignSelf: 'center',
    marginTop: 15,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    width: 148,
    fontFamily: 'Poppins-SemiBold'
  },
  titleText: {
    fontFamily: 'Poppins-Regular'
  }
})

export default Login
