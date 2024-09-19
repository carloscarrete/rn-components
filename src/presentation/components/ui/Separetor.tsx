import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/theme'

interface Props {
    style?: StyleProp<ViewStyle>
}

const Separetor = ({ style }: Props) => {
    return (
        <View style={{
            backgroundColor: colors.cardBackground
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