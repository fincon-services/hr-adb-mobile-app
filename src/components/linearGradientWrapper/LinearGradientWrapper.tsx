import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const directionMap = {
  topToBottom: { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } },
  bottomToTop: { start: { x: 0.5, y: 1 }, end: { x: 0.5, y: 0 } },
  leftToRight: { start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } },
  rightToLeft: { start: { x: 1, y: 0.5 }, end: { x: 0, y: 0.5 } },
  card: { start: { x: 0.1, y: 0.1 }, end: { x: 1, y: 1 } },
} as const;

type Direction = keyof typeof directionMap;

interface LinearGradientWrapperProps {
  children: ReactNode;
  colors?: string[];
  direction?: Direction;
  style?: StyleProp<ViewStyle>;
}

const LinearGradientWrapper: React.FC<LinearGradientWrapperProps> = ({
  children,
  colors = ['#055C7B', '#1392C1'],
  direction = 'topToBottom',
  style = {},
}) => {
  const { start, end } = directionMap[direction];

  return (
    <LinearGradient start={start} end={end} colors={colors} style={style}>
      {children}
    </LinearGradient>
  );
};

export default LinearGradientWrapper;
