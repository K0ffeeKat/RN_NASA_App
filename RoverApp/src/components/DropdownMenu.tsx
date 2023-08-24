import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, PropsWithChildren } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import dropdownIcon from '../assets/images/dropdownIcon.png'

interface Props {
  listOfCameras: {
    label: string,
    value: string
  }[],
  styleLabelText: {
    fontFamily: string,
    fontSize: number,
    color: string,
    marginBottom: number
  },
  onCameraSelection: (cameraValue: string) => void
}

export const DropdownMenu = ({ listOfCameras, onCameraSelection, styleLabelText } : PropsWithChildren<Props>) => {
  const [value, setValue] = useState<string | null>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleCameraChange = (cameraValue: string) => {
    onCameraSelection(cameraValue)
    setIsFocused(false)
  }

  const handleRightIconRender = () => {
    return ( 
      <Image source={dropdownIcon} style={styles.iconStyle}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styleLabelText}>Rover Camera</Text>
      <Dropdown
        style={[styles.dropdown, isFocused && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.itemTextStyle}
        containerStyle={styles.listContainerStyle}
        iconStyle={styles.iconStyle}
        data={listOfCameras}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocused ? 'Select a camera' : '...'}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={item => onCameraSelection(item.value)}
        renderRightIcon={handleRightIconRender}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  dropdown: {
    height: 60,
    backgroundColor: '#EDE6DE',
    width: 327,
    borderRadius: 10,
    paddingHorizontal: 16
  },
  iconStyle: {
    width: 24,
    height: 24
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 18,
    fontFamily: 'Dosis-Regular',
    color: 'black'
  },
  selectedTextStyle: {
    fontSize: 18,
    fontFamily: 'Dosis-Regular',
    color: 'black'
  },
  itemTextStyle: {
    fontSize: 18,
    fontFamily: 'Dosis-Regular',
    color: 'black'
  },
  listContainerStyle: {
    borderRadius: 10
  }
})