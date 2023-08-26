import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type AppStackParamList = {
  Date: undefined
  Gallery: undefined
  View: undefined
}

export type AppNavigationProps<Route extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, Route>

export type DateScreenNavigationProps = AppNavigationProps<'Date'>
export type GalleryScreenNavigationProps = AppNavigationProps<'Gallery'>
export type ViewScreenNavigationProps = AppNavigationProps<'View'>
