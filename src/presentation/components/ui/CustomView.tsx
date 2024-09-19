import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/theme/theme'



interface Props{
    style?: StyleProp<ViewStyle>
}

const CustomView = ({style, children}: React.PropsWithChildren<Props>) => {
  return (
    <View style={[globalStyles.mainContainer, style]}>
        {children}
    </View>
  )
}

export default CustomView