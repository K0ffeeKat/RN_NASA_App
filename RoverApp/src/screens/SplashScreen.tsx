import { StyleSheet, View, ImageBackground, Image } from 'react-native'
import React, { FC } from 'react'

export const SplashScreen: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/splash_image.png')}
        resizeMode='cover'
        style={styles.backgroundImage}
        >
      <Image 
        source={require('../assets/images/splash_text.png')}
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