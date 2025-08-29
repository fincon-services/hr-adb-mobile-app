import React, { memo } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../constants/colors'; // adjust the path as needed
import styles from './button.style';
import AppIcon from '../appIcon/AppIcon';
import { icons } from '../../constants/icons';

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}
      style={[styles.requestButton, buttonStyle]}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      <View style={styles.divider}></View>
      <AppIcon type={icons.type} name="plus" size={12} color={Colors.white} />
    </TouchableOpacity>
  );
};

export default memo(Button);
