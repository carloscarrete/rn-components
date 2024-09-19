import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-gesture-handler'
import { colors } from '../../../config/theme/theme'

interface Props {
    isOn: boolean,
    text?: String,
    onChange: (value: boolean) => void
}


const CustomSwitch = ({ isOn, onChange, text}: Props) => {
    return (
        <View style={styles.switchRow}>
            {
                text && <Text style={{color: colors.text}}>{text}</Text>
            }
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isOn ? '#4464ce' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                value={isOn}
                onValueChange={onChange}
            /> 
        </View>
    )
}

export default CustomSwitch

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
})