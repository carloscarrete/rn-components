import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/theme'
import { useAnimation } from '../../hooks/useAnimation'

const Animation101Screen = () => {

    const { fadeIn, fadeOut, animatedOpacity, animatedTop, startMovingTopPosition } = useAnimation();

  return (
    <View style={[
        styles.container
    ]}>

        <Animated.View style={[styles.purpleBox, {opacity: animatedOpacity, transform: [{translateY: animatedTop}]}]}/>

        <Pressable style={{marginTop:10}} onPress={()=> {fadeIn({}); startMovingTopPosition({initialPosition: -100, easing: Easing.elastic(2), duration: 1200})}}>
            <Text>FadeIn</Text>
        </Pressable>
        <Pressable style={{marginTop:10}} onPress={()=> fadeOut({})}>
            <Text>FadeOut</Text>
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