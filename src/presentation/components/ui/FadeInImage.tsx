import { View, Text, StyleProp, ImageStyle, Animated, ActivityIndicator } from 'react-native';
import React, { useState } from 'react'
import { Image } from 'react-native'
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

interface Props{
    uri: string,
    style?: StyleProp<ImageStyle>
}

const FadeInImage = ({uri, style}:Props) => {

    const [isLoading, setIsLoading] = useState(true);
    const {animatedOpacity, fadeIn} = useAnimation();

  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>

        {
            isLoading && (
                <ActivityIndicator
                color={colors.primary}
                style={{position: 'absolute'}}
                size={30}
             />
            )
        }
        
        <Animated.Image
            source={{ uri }}
            onLoadEnd={() => {fadeIn({duration: 1000}), setIsLoading(false)}}
            style={[style, {shadowOpacity: animatedOpacity}]}
         />
    </View>
  )
}

export default FadeInImage