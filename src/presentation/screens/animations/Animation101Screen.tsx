import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../../config/theme/theme'
import { useAnimation } from '../../hooks/useAnimation'
import { ThemeContext } from '../../context/ThemeContext'

const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();
    const {color} = useContext(ThemeContext);

  return (
    <View style={[
        styles.container,
        {
            backgroundColor: color.cardBackground
        }
    ]}>

        <Animated.View style={[styles.purpleBox, {opacity: animatedOpacity, transform: [{translateY: animatedTop}]}]}/>

        <Pressable style={{marginTop:10}} onPress={()=> {fadeIn({}); startMovingTopPosition({initialPosition: -100, easing: Easing.elastic(2), duration: 1200})}}>
            <Text style={{color: color.text}}>FadeIn</Text>
        </Pressable>
        <Pressable style={{marginTop:10}} onPress={()=> fadeOut({})}>
            <Text  style={{color: color.text}}>FadeOut</Text>
        </Pressable>

    </View>
  )
}

export default Animation101Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: colors.primary,
        width: 150,
        height: 150
    }
})