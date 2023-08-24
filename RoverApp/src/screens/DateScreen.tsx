import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { DropdownMenu } from '../components/DropdownMenu'
import { MainStore } from '../stores/mainStore'
import { Calendar } from '../components/Calendar'
import { observer } from 'mobx-react'
import { CustomButton } from '../components/CustomButton'
import backgroundRover from '../assets/images/background.png'

export const DateScreen = observer(() => {
  const {
    fetchPhotos,
    listOfCameras,
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
  }

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={backgroundRover}
        resizeMode='cover'
        style={styles.backgroundImage}
        />
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Select Camera and Date</Text>
      </View>
      <View style={styles.selectionContainer}>
        <View>
          <DropdownMenu
            listOfCameras={listOfCameras}
            onCameraSelection={handleCameraSelection}
            styleLabelText={styles.labelText}
          />
        </View>
        <View>
          <Calendar
            selectedDate={selectedDate}
            onDateSelection={handleDateSelection}
            styleLabelText={styles.labelText}
          />
        </View>
        <CustomButton
          buttonName='EXPLORE'
          onButtonPress={handlePhotoFetch}
        />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headlineContainer: {
    paddingTop: 42,
    marginBottom: 110
  },
  headline: {
    fontFamily: 'Dosis-SemiBold',
    fontSize: 18,
    color: 'black'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    top: -150,
    bottom: 0
  },
  selectionContainer: {
    flex: 1,
    alignItems: 'center',
  },
  labelText: {
    fontFamily: 'Dosis-Regular',
    fontSize: 15,
    color: 'black',
    marginBottom: 7
  }
})