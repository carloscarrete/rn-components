import { View, Text } from 'react-native'
import React, { PropsWithChildren, useContext } from 'react'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import Navigation from './presentation/navigator/Navigation'
import { ThemeContext, ThemeProvider } from './presentation/context/ThemeContext'


const AppNavigationContainer = ({ children }: PropsWithChildren) => {

  const {isDark} = useContext(ThemeContext)

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
        {children}
    </NavigationContainer>

  )
}

const AppTheme = ({children}:PropsWithChildren) => {
  return(
    <ThemeProvider>
      <AppNavigationContainer>
        {children}
      </AppNavigationContainer>
    </ThemeProvider>
  )
}


const ComponentsApp = () => {
  return (
    <AppTheme>
      <Navigation />
    </AppTheme>
  )
}

export default ComponentsApp