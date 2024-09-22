import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../config/theme/theme'



interface Props{
    style?: StyleProp<ViewStyle>,
    margin?: boolean
}

const CustomView = ({style, children, margin}: React.PropsWithChildren<Props>) => {
  return (
    <View style={[globalStyles.mainContainer, margin ? globalStyles.globalMargin : null ,style]}>
        {children}
    </View>
  )
}

export default CustomView