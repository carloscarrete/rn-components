import {  Alert, Text } from 'react-native'
import React, { useContext } from 'react'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import Button from '../../components/ui/Button'
import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapter'
import { ThemeContext } from '../../context/ThemeContext'

const AlertScreen = () => {
    const {isDark} = useContext(ThemeContext)

    const createTwoButtonAlert = () => {
        Alert.alert('Alert two button', 'This is an alert',[
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {
            userInterfaceStyle: isDark ? 'dark' : 'light'
        })
    }

    const createThreeButtonAlert = () => {
        Alert.alert('Alert three button', 'This is an alert',
            [
                {text: 'Cancel', onPress: ()=> console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: ()=> console.log('OK Pressed')},
                {text: 'Delete', onPress: ()=> console.log('Delete Pressed'), style: 'destructive'},
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('onDismiss')
            }
        )
    }

        const onShowPrompt = () => {
            showPrompt({
                title: 'Pumas',
                text: 'De mi vida',
                buttons: [
                    { text: 'Cancel', onPress: (password: string) => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: (password: string) => console.log('OK Pressed, password: ' + password) }
                ]
            })
        }

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text='Alertas' />

      <Button text='Alerta - 2 botones' onPress={createTwoButtonAlert} styles={{marginBottom: 10}}/>
      <Button text='Alerta - 3 botones' onPress={createThreeButtonAlert} styles={{marginBottom: 10}} />
      <Button text='Prompt' onPress={onShowPrompt} styles={{marginBottom: 10}}/>
    </CustomView>
  )
}

export default AlertScreen