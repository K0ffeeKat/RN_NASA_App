import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppStack } from './src/stacks/AppStack'

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <AppStack />
    </SafeAreaProvider>
  )
}

export default App
