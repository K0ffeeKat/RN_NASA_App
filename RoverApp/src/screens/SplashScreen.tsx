import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'
import splashImage from '../assets/images/splash.png'

export const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={splashImage}
        resizeMode='cover'
        style={styles.backgroundImage}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  backgroundImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    aspectRatio: 1 / 2.1
  },
})