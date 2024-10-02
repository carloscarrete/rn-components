import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../../../config/theme/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../../context/ThemeContext'

interface Props{
    text: string,
    safe?: boolean,
    white?: boolean
}

const Title = ({text,safe,white}:Props) => {

  const {top} = useSafeAreaInsets();
  const {color} = useContext(ThemeContext);


  return (
    <View>
      <Text style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        color: white ? 'white' : color.text,
        marginBottom: 20
      }}>{text}</Text>
    </View>
  )
}

export default Title