import { View, Text, StyleProp, ViewStyle, Pressable } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colors, globalStyles } from '../../../config/theme/theme'

interface Props extends PropsWithChildren{
    text: string,
    styles?: StyleProp<ViewStyle>,

    onPress: () => void
}

const Button = ({onPress,text,styles,children}:Props) => {
  return (
    <Pressable
        onPress={onPress} 
        style={({pressed})=>([
            globalStyles.btnPrimary,
            {
                opacity: pressed ? 0.5 : 1,
                backgroundColor: colors.primary
            },
            styles
        ])
        }   
    >
      <Text style={[
        globalStyles.btnPrimaryText,
        {
          color: colors.buttonTextColor
        }
      ]}>{text}</Text>
    </Pressable>
  )
}

export default Button