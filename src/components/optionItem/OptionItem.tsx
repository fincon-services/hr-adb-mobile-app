import React, { memo } from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { Images } from '../../constants/images';
import styles from './optionItem.style';
interface OptionProps {
  icon: ImageSourcePropType;
  title: string;
}
const OptionItem: React.FC<OptionProps> = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.optionView}>
        <View style={styles.iconContainer}>
          <Image source={icon} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image source={Images.rightThemeArrow} />
    </View>
  );
};

export default memo(OptionItem);
