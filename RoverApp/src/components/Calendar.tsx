import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useState, type PropsWithChildren } from 'react'
import { CalendarModal } from './CalendarModal'
import calendarIcon from '../assets/images/calendar.png'
import { observer } from 'mobx-react'

interface Props {
  selectedDate: string
  onDateSelection: (date: string) => void
  styleLabelText: {
    fontFamily: string
    fontSize: number
    color: string
    marginBottom: number
  }
}

export const Calendar = observer(({ selectedDate, onDateSelection, styleLabelText }: PropsWithChildren<Props>) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleCalendarPress = (): void => {
    setIsVisible(previosState => !previosState)
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styleLabelText}>Date</Text>
      <Pressable
        style={styles.calendarButton}
        onPress={handleCalendarPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{ (selectedDate.length > 0) ? selectedDate : 'Select date' }</Text>
          <Image source={calendarIcon}/>
        </View>
      </Pressable>
      <CalendarModal
        isVisible={isVisible}
        onCalendarPress={handleCalendarPress}
        onDateSelection={onDateSelection}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    marginTop: 16
  },
  calendarButton: {
    height: 60,
    backgroundColor: '#EDE6DE',
    width: 327,
    borderRadius: 10,
    paddingHorizontal: 16
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: 'Dosis-Regular',
    color: 'black'
  }
})
