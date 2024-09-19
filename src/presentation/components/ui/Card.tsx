import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/theme'

interface Props{
    style?: StyleProp<ViewStyle>
}

const Card = ({style, children}:React.PropsWithChildren<Props>) => {
  return (
    <View style={[
      {
          backgroundColor: colors.cardBackground,
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