import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './radioButton.style';
import { verticalScale } from '../../utils/responsive';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  title: string;
  options: RadioOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  direction?: 'row' | 'column'; // row = series in single row, column = vertical
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  title,
  options,
  selectedValue,
  onSelect,
  direction = 'row',
  containerStyle,
  labelStyle,
}) => {
  // Main Return
  return (
    <View style={styles.topContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View
        style={[
          styles.groupContainer,
          { flexDirection: direction },
          containerStyle,
        ]}
      >
        {options.map(option => {
          const isSelected = option.value === selectedValue;
          return (
            <TouchableOpacity
              key={option.value}
              style={styles.radioContainer}
              onPress={() => onSelect(option.value)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.radioOuter,
                  isSelected && styles.radioOuterSelected,
                ]}
              >
                {isSelected && <View style={styles.radioInner} />}
              </View>
              <Text style={[styles.label, labelStyle]}>{option.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default RadioButton;
