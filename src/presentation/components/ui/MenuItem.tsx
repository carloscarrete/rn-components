import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Separetor from './Separetor'

interface Props {
    name: string,
    icon: string,
    component: string,
    isLast?: boolean,
    isFirst?: boolean
}

const MenuItem = ({ component, icon, name, isFirst = false, isLast = false }: Props) => {

    const navigation = useNavigation<any>();

    return (
        <>
            <Pressable onPress={() => navigation.navigate(component)}>
                <View style={{
                    ...styles.container,
                    backgroundColor: colors.cardBackground,
                    ...(isFirst &&
                    {
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        paddingTop: 10
                    }
                    ),
                    ...(isLast &&
                    {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingBottom: 10
                    }
                    )
                }}>
                    <Icon name={icon} size={25} style={{ marginRight: 10 }} />
                    <Text style={{ color: colors.text }}>{name}</Text>
                    <Icon name='chevron-forward-outline' style={{ marginLeft: 'auto' }} />
                </View>
            </Pressable>
            {
                !isLast && ( 
                    <Separetor />
                )
            }
        </>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})