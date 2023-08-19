import React, { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppStack } from './src/stacks/AppStack'

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <AppStack />
    </SafeAreaProvider>
  )
}

export default App