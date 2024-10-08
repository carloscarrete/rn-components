import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import Button from '../../components/ui/Button';
import { useAnimation } from '../../hooks/useAnimation';

const { height } = Dimensions.get('window');

const Animation103Screen: React.FC = () => {

  const {startScaling,stopScaling,startBouncing,stopBouncing, animatedTranslateY, animatedScale} = useAnimation();

  const startAnimations = () => {
    startBouncing({toValue: height-150});
    startScaling({toValue:3});
  };

  const stopAnimations = () => {
    stopBouncing();
    stopScaling();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            transform: [
              { translateY: animatedTranslateY },
              { scale: animatedScale },
            ],
          },
        ]}
      />
      <View style={styles.buttonContainer}>
        <Button text="Iniciar Animación" onPress={startAnimations} />
        <Button text="Detener Animación" onPress={stopAnimations} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F3F2F7',
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#5b0c88',
  },
  buttonContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '80%',
    gap: 12,
    marginBottom: 20,
  },
});

export default Animation103Screen;
