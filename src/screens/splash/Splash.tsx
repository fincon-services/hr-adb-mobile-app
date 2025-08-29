import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import styles from './splash.style';

interface Props {
  onFinish: () => void;
}

const SplashScreen: React.FC<Props> = ({ onFinish }) => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate both logo and text
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 4,
        tension: 40,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    // Navigate after 2 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={Images.appLogo}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
        resizeMode="contain"
      />
      {/* <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>
        {Labels.appName}
      </Animated.Text> */}
    </View>
  );
};

export default SplashScreen;
