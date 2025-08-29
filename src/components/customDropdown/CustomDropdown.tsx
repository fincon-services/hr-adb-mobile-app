import React, { memo, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { Images } from '../../constants/images';
import styles from './customDropdown.style';

export interface DropdownItem {
  id: string;
  label: string;
  value: string;
}

interface CustomDropdownProps {
  title: string;
  data: DropdownItem[];
  selectedValue: string;
  dropdownStyle?: ViewStyle;
  dropdownContainerStyle?: ViewStyle;
  onSelect: (value: DropdownItem) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  title,
  data,
  selectedValue,
  onSelect,
  dropdownStyle,
  dropdownContainerStyle,
}) => {
  const [visible, setVisible] = useState(false);

  //Main Return
  return (
    <View style={[styles.container, dropdownContainerStyle]}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={[styles.dropdown, dropdownStyle]}
        onPress={() => setVisible(prev => !prev)}
      >
        <Text>{selectedValue || 'Select an option'}</Text>
        <Image source={Images.dropDownArrow} />
      </TouchableOpacity>

      {visible && (
        <View style={styles.dropdownList}>
          <FlatList
            data={data}
            keyExtractor={item => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelect(item as never);
                  setVisible(false);
                }}
              >
                <Text style={styles.dropdownItem}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default memo(CustomDropdown);
