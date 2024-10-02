import { Text, StyleProp, ViewStyle, Pressable } from 'react-native'
import React, { PropsWithChildren, useContext } from 'react'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface Props extends PropsWithChildren{
    text: string,
    styles?: StyleProp<ViewStyle>,

    onPress: () => void
}

const Button = ({onPress,text,styles,children}:Props) => {

  const {color} = useContext(ThemeContext);


  return (
    <Pressable
        onPress={onPress} 
        style={({pressed})=>([
            globalStyles.btnPrimary,
            {
                opacity: pressed ? 0.5 : 1,
                backgroundColor: color.primary
            },
            styles
        ])
        }   
    >
      <Text style={[
        globalStyles.btnPrimaryText,
        {
          color: color.buttonTextColor
        }
      ]}>{text}</Text>
    </Pressable>
  )
}

export default Button