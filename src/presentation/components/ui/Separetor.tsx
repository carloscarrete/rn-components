import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../../config/theme/theme'
import { ThemeContext } from '../../context/ThemeContext'

interface Props {
    style?: StyleProp<ViewStyle>
}

const Separetor = ({ style }: Props) => {

    const {color} = useContext(ThemeContext);

    return (
        <View style={{
            backgroundColor: color.cardBackground
        }}>
            <View
                style={[
                    {
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(0,0,0,0.2)',
                        marginVertical: 6,
                        width: '90%',
                        alignSelf: 'center'
                    },
                    style
                ]
                }

            />
        </View>
    )
}

export default Separetor