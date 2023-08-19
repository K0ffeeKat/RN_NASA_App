import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { DropdownList } from '../components/DropdownList'
import { MainStore } from '../stores/mainStore'

export const DateScreen: FC = () => {
  const { listOfCameras } = MainStore

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        resizeMode='cover'
        style={styles.backgroundImage}
        />
        <View>
          <Text>Select Camera and Date</Text>
          <View>
            <View>
              <Text>Rover Camera</Text>
              <DropdownList list={listOfCameras} />
            </View>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    top: -200,
    bottom: 0
  }
})