import React, { memo } from 'react';
import {
  Image,
  ImagePropsBase,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import styles from './header.style';
interface HeaderProps {
  leftIcon: ImagePropsBase;
  rightIcon?: ImagePropsBase;
  title?: string;
  onRightPress?: () => void;
  onLeftPress: () => void;
  additionalStyle?: StyleProp<ViewStyle>;
}
const Header: React.FC<HeaderProps> = ({
  rightIcon,
  leftIcon,
  title,
  onLeftPress,
  onRightPress,
  additionalStyle,
}) => {
  return (
    <View style={[styles.container, additionalStyle]}>
      <TouchableOpacity onPress={onLeftPress} style={styles.leftContainer}>
        <Image source={leftIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onRightPress} style={styles.rightContainer}>
        <Image source={rightIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
