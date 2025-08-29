import React, { memo } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Colors } from '../../constants/colors';
import styles from './customTextInput.style';

interface CustomTextInputProps extends TextInputProps {
  title?: string;
  onRightIconPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  rightIcon?: ImageSourcePropType;
  errorMessage?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  title,
  onRightIconPress,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  rightIcon,
  errorMessage,
  ...rest
}) => {
  return (
    <View style={[styles.wrapper, containerStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          placeholderTextColor={Colors.placeholderColor}
          style={[styles.input, inputStyle]}
          {...rest}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.iconWrapper}
          >
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default memo(CustomTextInput);
