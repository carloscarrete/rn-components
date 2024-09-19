import {  Alert, Text } from 'react-native'
import React from 'react'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import Button from '../../components/ui/Button'

const AlertScreen = () => {

    const createTwoButtonAlert = () => {
        Alert.alert('Alert two button', 'This is an alert',[
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])
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

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text='Alertas' />

      <Button text='Alerta - 2 botones' onPress={createTwoButtonAlert} styles={{marginBottom: 10}}/>
      <Button text='Alerta - 3 botones' onPress={createThreeButtonAlert} styles={{marginBottom: 10}} />
      <Button text='Prompt' onPress={()=>{}} styles={{marginBottom: 10}}/>
    </CustomView>
  )
}

export default AlertScreen