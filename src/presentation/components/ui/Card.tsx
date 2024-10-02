import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface Props{
    style?: StyleProp<ViewStyle>
}

const Card = ({style, children}:React.PropsWithChildren<Props>) => {
  const { color } = useContext(ThemeContext);
  return (
    <View style={[
      {
          backgroundColor: color.cardBackground,
          borderRadius: 10,
          padding: 10,          
      },
      style  
    ]}>
        {children}
    </View>
  )
}

export default Card