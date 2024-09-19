import { View, Text } from 'react-native'
import React from 'react'
import { colors, globalStyles } from '../../../config/theme/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props{
    text: string,
    safe?: boolean,
    white?: boolean
}

const Title = ({text,safe,white}:Props) => {

  const {top} = useSafeAreaInsets();

  return (
    <View>
      <Text style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        color: white ? 'white' : colors.text,
        marginBottom: 20
      }}>{text}</Text>
    </View>
  )
}

export default Title