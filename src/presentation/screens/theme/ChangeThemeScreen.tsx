import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import Button from '../../components/ui/Button'
import { ThemeContext } from '../../context/ThemeContext'

const ChangeThemeScreen = () => {

    const {setTheme, currentTheme, color} = useContext(ThemeContext)

  return (
    <CustomView margin>
      <Title  text={`Cambiar tema: ${currentTheme}`} />

      <Button text='Light' onPress={()=>setTheme('light')} />
        <View style={{marginTop: 10}} />
      <Button text='Dark' onPress={()=>setTheme('dark')} />
        <View style={{marginTop: 10}} />
        <Text style={{color: color.text}}>
          {
            JSON.stringify(color, null, 3 )
          }
        </Text>

    </CustomView>
  )
}

export default ChangeThemeScreen 