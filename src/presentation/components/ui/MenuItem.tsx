import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../../config/theme/theme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Separetor from './Separetor'
import { ThemeContext } from '../../context/ThemeContext'

interface Props {
    name: string,
    icon: string,
    component: string,
    isLast?: boolean,
    isFirst?: boolean
}

const MenuItem = ({ component, icon, name, isFirst = false, isLast = false }: Props) => {

    const navigation = useNavigation<any>();
    const { color } = useContext(ThemeContext);

    return (
        <>
            <Pressable onPress={() => navigation.navigate(component)}>
                <View style={{
                    ...styles.container,
                    backgroundColor: color.cardBackground,
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
                    ),
                }}>
                    <Icon color={color.primary} name={icon} size={25} style={{ marginRight: 10 }} />
                    <Text style={{ color: color.text }}>{name}</Text>
                    <Icon color={color.primary} name='chevron-forward-outline' style={{ marginLeft: 'auto' }} />
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