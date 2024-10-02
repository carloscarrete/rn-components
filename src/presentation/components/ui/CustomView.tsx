import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'



interface Props{
    style?: StyleProp<ViewStyle>,
    margin?: boolean
}

const CustomView = ({style, children, margin}: React.PropsWithChildren<Props>) => {

  const {color} = useContext(ThemeContext);

  return (
    <View style={[globalStyles.mainContainer, margin ? globalStyles.globalMargin : null ,style, {backgroundColor: color.background}]}>
        {children}
    </View>
  )
}

export default CustomView