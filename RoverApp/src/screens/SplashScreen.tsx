import { StyleSheet, View, ImageBackground, Image } from 'react-native'
import React, { FC } from 'react'
import splashImage from '../assets/images/splash_image.png'
import splashText from '../assets/images/splash_text.png' 

export const SplashScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={splashImage}
        resizeMode='cover'
        style={styles.backgroundImage}
        >
      <Image 
        source={splashText}
        style={styles.headline}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  backgroundImage: {
    flex: 1
  },
  headline: {
    marginTop: 42,
    marginLeft: 18
  }
})