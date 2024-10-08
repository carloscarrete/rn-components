import { useRef } from "react";
import { Animated, Easing, EasingFunction } from "react-native";

interface StartBouncingProps {
    toValue: number,
    duration?: number,
    easing?: EasingFunction,
    callback?: () => void
}

interface StartScalingProps{
    toValue: number,
    duration?: number,
    easing?: EasingFunction,
    callback?: () => void
}

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;
    const animatedScale = useRef(new Animated.Value(1)).current;
    const animatedTranslateY = useRef(new Animated.Value(0)).current;

    const bounceAnimation = useRef<Animated.CompositeAnimation | null>(null);
    const scaleAnimation = useRef<Animated.CompositeAnimation | null>(null);

    const fadeIn = ({duration = 300, toValue = 1, callback = ()=> {}}) => {
        //transformTop()
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        },).start(callback)
    }

    const fadeOut = ({duration = 300, toValue = 0, callback = ()=> {}}) =>{
        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true
        }).start(callback)
        //()=>animatedTop.resetAnimation()
    }


    const startMovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.linear,
        callback = () => {}
    })  => {
        animatedTop.setValue(initialPosition);
        Animated.timing(animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing
        }).start(callback)
    }

    const startBouncing = ({toValue, duration=1000, easing = Easing.bounce, callback }:StartBouncingProps) => {
        bounceAnimation.current = Animated.loop(
            Animated.sequence([
                Animated.timing(animatedTranslateY, {
                    toValue: toValue,
                    duration: duration,
                    easing: easing,
                    useNativeDriver: true
                }),
                Animated.timing(animatedTranslateY, {
                    toValue: 0,
                    duration: duration,
                    easing: easing,
                    useNativeDriver: true
                }),
            ])
        )

        bounceAnimation.current.start(callback)
    }

    const stopBouncing = () => {
        if(bounceAnimation.current){
            bounceAnimation.current.stop();
            bounceAnimation.current.reset();
        }
    }

    const startScaling = ({toValue,callback,duration=1000,easing=Easing.linear}:StartScalingProps) => {
        scaleAnimation.current = Animated.loop(Animated.timing(
            animatedScale, {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true,
                easing: easing
            }
        ))

        scaleAnimation.current.start(callback);
    }

    const stopScaling = () => {
        if(scaleAnimation.current){
            scaleAnimation.current.stop();
            scaleAnimation.current.reset();
        }
    }


  return { 
    animatedOpacity,
    animatedTop,
    
    fadeIn,
    fadeOut,
    startMovingTopPosition,

    startBouncing,
    stopBouncing,
    startScaling,
    stopScaling,

    animatedTranslateY,
    animatedScale
  }
}
