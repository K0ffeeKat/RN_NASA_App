import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DateScreen } from '../screens/DateScreen'
import { GalleryScreen } from '../screens/GalleryScreen'
import { ViewScreen } from '../screens/ViewScreen'

const Stack = createNativeStackNavigator()

export const AppStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Date' component={DateScreen} />
        <Stack.Screen name='Gallery' component={GalleryScreen} />
        <Stack.Screen name='View' component={ViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
