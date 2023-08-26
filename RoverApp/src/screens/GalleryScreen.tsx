import { StyleSheet, View, Pressable, Image, Text} from 'react-native'
import React, { type PropsWithChildren } from 'react'
import { type GalleryScreenNavigationProps } from '../../types/types'
import leftArrow from '../assets/images/back.png'
import { PhotoList } from '../components/PhotoList'
import { observer } from 'mobx-react'
import { MainStore } from '../stores/mainStore'

type NavigationProps = GalleryScreenNavigationProps

export const GalleryScreen = observer(({ navigation }: PropsWithChildren<NavigationProps>): JSX.Element => {
  const { setSelectedDate, setSelectedCamera } = MainStore

  const handleArrowPress = () => {
    setSelectedCamera('')
    setSelectedDate('')
    navigation.navigate('Date')
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Pressable
          style={styles.leftArrowButton}
          onPress={handleArrowPress}
          >
          <Image source={leftArrow}/>
        </Pressable>
        <View style={styles.headerTextBlock}>
          <Text>Camera name</Text>
          <Text>Date</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <PhotoList />
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DCCEBE'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
    justifyContent: 'center',
    marginBottom: 16
  },
  headerTextBlock: {
    alignItems: 'center',
  },
  leftArrowButton: {
    position: 'absolute',
    left: 16
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 8
  }
})
