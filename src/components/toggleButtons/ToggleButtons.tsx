import React, { memo } from 'react';
import {
  Pressable,
  Text,
  View,
  StyleProp,
  ViewStyle,
  Alert,
} from 'react-native';
import styles from './toggleButtons.style';
import { Colors } from '../../constants/colors';
import globalstyles from '../../constants/globalstyles';

interface ButtonItem {
  key: string | number;
  title: string;
}

interface ToggleButtonsProps {
  buttonsArray: ButtonItem[];
  selectedButton: string | number;
  onPressButton: (key: string | number) => void;
  showActiveBorder?: boolean;
  additionalContainerStyle?: StyleProp<ViewStyle>;
  additionalInnerContainerStyle?: StyleProp<ViewStyle>;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  buttonsArray,
  selectedButton,
  onPressButton,
  showActiveBorder = false,
  additionalContainerStyle,
  additionalInnerContainerStyle,
}) => {
  return (
    <View style={[styles.container, additionalContainerStyle]}>
      {buttonsArray?.map(button => {
        const selected = selectedButton === button?.key;

        return (
          <Pressable
            key={button.key}
            style={[
              styles.buttonContainer,
              selected && globalstyles.buttonShadowStyle2,
              additionalInnerContainerStyle,
              {
                backgroundColor: selected ? Colors.white : 'transparent',
              },
            ]}
            onPress={() => onPressButton(button?.key)}
          >
            <Text style={[styles.buttonText]}>{button?.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default memo(ToggleButtons);
