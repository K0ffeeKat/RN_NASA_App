import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { type PropsWithChildren } from 'react'
import { DropdownMenu } from '../components/DropdownMenu'
import { MainStore } from '../stores/mainStore'
import { Calendar } from '../components/Calendar'
import { observer } from 'mobx-react'
import { CustomButton } from '../components/CustomButton'
import backgroundRover from '../assets/images/background.png'
import { Dimensions } from 'react-native'
import type { DateScreenNavigationProps } from '../../types/types'

const HEIGHT = Dimensions.get('screen').height

type NavigationProps = DateScreenNavigationProps

export const DateScreen = observer(({ navigation }: PropsWithChildren<NavigationProps>) => {

  const {
    fetchPhotos,
    listOfCameras,
    selectedCamera,
    setSelectedCamera,
    selectedDate,
    setSelectedDate
  } = MainStore

  const handleDateSelection = (date: string) => {
    setSelectedDate(date)
  }

  const handleCameraSelection = (cameraValue: string) => {
    setSelectedCamera(cameraValue)
  }

  const handlePhotoFetch = () => {
    fetchPhotos()
    navigation.navigate('Gallery')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={backgroundRover}
          style={styles.backgroundImage}
          />
          <View style={styles.headlineContainer}>
            <Text style={styles.headline}>Select Camera and Date</Text>
          </View>
          <View style={styles.selectionContainer}>
            <DropdownMenu
              selectedCamera={selectedCamera}
              listOfCameras={listOfCameras}
              onCameraSelection={handleCameraSelection}
              styleLabelText={styles.labelText}
            />
            <Calendar
              selectedDate={selectedDate}
              onDateSelection={handleDateSelection}
              styleLabelText={styles.labelText}
            />
            <CustomButton
              buttonName='Explore'
              onButtonPress={handlePhotoFetch}
            />
          </View>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headlineContainer: {
    marginTop: 42,
    alignItems: 'center'
  },
  headline: {
    fontFamily: 'Dosis-SemiBold',
    fontSize: 18,
    color: 'black'
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    width: '100%',
    aspectRatio: 1/2.1,
    position: 'absolute'
  },
  selectionContainer: {
    flex: 1,
    marginTop: HEIGHT/7,
    alignItems: 'center'
  },
  labelText: {
    fontFamily: 'Dosis-Regular',
    fontSize: 15,
    color: 'black',
    marginBottom: 7
  }
})