import { Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import Title from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import Card from '../../components/ui/Card'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <ScrollView>
      <CustomView margin>
        <Title safe text='Text Inputs' />
        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder='Full Name'
            autoCapitalize='words'
            autoCorrect={false}
            onChangeText={value => setForm(
              { ...form, name: value }
            )}
          />
          <TextInput
            style={globalStyles.input}
            placeholder='Email'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            onChangeText={value => setForm(
              { ...form, email: value }
            )}
          />
          <TextInput
            style={globalStyles.input}
            placeholder='Phone'
            keyboardType='phone-pad'
            onChangeText={(value) => setForm({ ...form, phone: value })}
          />
        </Card>

        <View style={{ height: 10 }} />

        <Card>
          <Text>{JSON.stringify(form, null, 3)}</Text>
          <Text>{JSON.stringify(form, null, 3)}</Text>
          <Text>{JSON.stringify(form, null, 3)}</Text>
          <Text>{JSON.stringify(form, null, 3)}</Text>
          <Text>{JSON.stringify(form, null, 3)}</Text>
          <Text>{JSON.stringify(form, null, 3)}</Text>
          <Text>{JSON.stringify(form, null, 3)}</Text>
          <Text>{JSON.stringify(form, null, 3)}</Text>
        </Card>

        <Card>
          <TextInput
            style={globalStyles.input}
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