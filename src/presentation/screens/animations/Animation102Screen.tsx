import { View, Animated, StyleSheet, PanResponder } from 'react-native'
import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext';

const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;
    const {color} = useContext(ThemeContext);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            { dx: pan.x, dy: pan.y }
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false
                }
            ).start();
        }
    })

    return (
        <View style={[styles.container, {backgroundColor: color.cardBackground}]}>
            <Animated.View {...panResponder.panHandlers} style={[pan.getLayout(), styles.purpleBox]}   />
        </View>
    )
} 

export default Animation102Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderRadius: 10
    }
})