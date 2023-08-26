import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'
import React, { type PropsWithChildren } from 'react'
import CalendarPicker from 'react-native-calendar-picker'
import { observer } from 'mobx-react'

interface Props {
  isVisible: boolean
  onCalendarPress: () => void
  onDateSelection: (date: string) => void
}

export const CalendarModal = observer(({ isVisible, onCalendarPress, onDateSelection }: PropsWithChildren<Props>) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType='fade'
      >
      <View style={styles.centeredView}>
        <View style={styles.modalContent}>
          <CalendarPicker
            width={350}
            onDateChange={onDateSelection}
          />
          <Pressable
            onPress={onCalendarPress}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Done</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
})

const styles = StyleSheet.create({
  modalContent: {
    width: 370,
    height: 400,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16
  },
  buttonContainer: {
    paddingTop: 20
  }
})
