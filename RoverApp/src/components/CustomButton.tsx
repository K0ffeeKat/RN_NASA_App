import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { type PropsWithChildren } from 'react'

interface Props {
  buttonName: string
  onButtonPress: () => void
}

export const CustomButton = ({ buttonName, onButtonPress }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <View>
      <Pressable
        onPress={onButtonPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{buttonName}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#BF2E0E',
    height: 60,
    width: 327,
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: 'Dosis-SemiBold',
    color: 'white',
    fontSize: 18
  }
})
