import React, { memo } from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import styles from './labelValue.style';

interface LabelValueProps {
  titleLeft: string;
  titleRight: string;
  valueLeft: string;
  valueRight: string;
  titleStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  titleLeftStyle?: StyleProp<TextStyle>;
  titleRightStyle?: StyleProp<TextStyle>;
  valueRightStyle?: StyleProp<TextStyle>;
  valueLeftStyle?: StyleProp<TextStyle>;
}

const LabelValue: React.FC<LabelValueProps> = ({
  titleLeft,
  titleRight,
  valueLeft,
  valueRight,
  titleStyle,
  valueStyle,
  titleLeftStyle,
  titleRightStyle,
  valueRightStyle,
  valueLeftStyle,
}) => {
  // Merge base + global + specific styles
  const titleLeftTextStyle = [styles.headingText, titleStyle, titleLeftStyle];
  const titleRightTextStyle = [styles.headingText, titleStyle, titleRightStyle];
  const valueLeftTextStyle = [styles.valueText, valueStyle, valueLeftStyle];
  const valueRightTextStyle = [styles.valueText, valueStyle, valueRightStyle];

  // Main return
  return (
    <View style={styles.detailWrapper}>
      <View style={styles.textContainer}>
        <Text style={titleLeftTextStyle}>{titleLeft}</Text>
        <Text style={titleRightTextStyle}>{titleRight}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={valueLeftTextStyle}>{valueLeft}</Text>
        <Text style={valueRightTextStyle}>{valueRight}</Text>
      </View>
    </View>
  );
};

export default memo(LabelValue);
