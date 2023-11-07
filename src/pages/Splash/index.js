import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MMKVLoader } from 'react-native-mmkv-storage'
import { PrabubimaTech } from '../../assets'
import { colors } from '../../utils/colors'

const Splash = ({ navigation }) => {
  const storage = new MMKVLoader().initialize();

  useEffect(() => {
    setTimeout(() => {
      if (storage.getString('auth')) {
        navigation.replace('Home')
      } else {
        navigation.replace('Login')
      }
    }, 3000);
  }, [])

  return (
    <View style={styles.container}>
      <Image source={PrabubimaTech} style={styles.image} />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  }
})