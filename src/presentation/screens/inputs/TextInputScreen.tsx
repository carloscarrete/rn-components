import { Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import Card from '../../components/ui/Card'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemeContext } from '../../context/ThemeContext'

const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const { color } = useContext(ThemeContext);


  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text='Text Inputs' />
        <Card>
          <TextInput
            style={[globalStyles.input, {color: color.text}]}
            placeholder='Full Name'
            placeholderTextColor={color.text}
            autoCapitalize='words'
            autoCorrect={false}
            onChangeText={value => setForm(
              { ...form, name: value }
            )}
          />
          <TextInput
            style={[globalStyles.input, {color: color.text}]}
            placeholder='Email'
            placeholderTextColor={color.text}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            onChangeText={value => setForm(
              { ...form, email: value }
            )}
          />
          <TextInput
            style={[globalStyles.input, {color: color.text}]}
            placeholder='Phone'
            placeholderTextColor={color.text}
            keyboardType='phone-pad'
            onChangeText={(value) => setForm({ ...form, phone: value })}
          />
        </Card>

        <View style={{ height: 10 }} />

        <Card>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
          <Text style={{color: color.text}}>{JSON.stringify(form, null, 3)}</Text>
        </Card>

        <Card>
          <TextInput
            style={[globalStyles.input, {color: color.text}]}
            placeholderTextColor={color.text}
            placeholder='Phone'
            keyboardType='phone-pad'
            onChangeText={(value) => setForm({ ...form, phone: value })}
          />
        </Card>
      </CustomView>
    </ScrollView>
  )
}

export default TextInputScreen