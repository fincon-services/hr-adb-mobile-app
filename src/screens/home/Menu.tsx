import React, { memo } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../constants/colors';
import globalstyles from '../../constants/globalstyles';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { navigate } from '../../navigation/navigationServices';
import { AppStackParamList } from '../../navigation/navigationTypes';
import styles from './home.style';
import AppIcon from '../../components/appIcon/AppIcon';
import { icons } from '../../constants/icons';

interface MenuItems {
  key: keyof AppStackParamList;
  title: string;
  icon: string;
  bgColor: string;
}
/// Menu Items

const menuItems: MenuItems[] = [
  {
    key: 'Profile',
    title: 'Profile',
    icon: 'user',
    bgColor: Colors.themeColor,
  },
  {
    key: 'Attendance',
    title: 'Attendance',
    icon: 'calendar',
    bgColor: Colors.brown,
  },
  {
    key: 'LeaveManagement',
    title: 'Leaves',
    icon: 'user-times',
    bgColor: Colors.brown,
  },
  {
    key: 'Policy',
    title: 'Policy',
    icon: 'file-text-o',
    bgColor: Colors.blue,
  },

  {
    key: 'SalarySlip',
    title: 'Salary Slip',
    icon: 'list-alt',
    bgColor: Colors.brown,
  },

  {
    key: 'Complaints',
    title: 'Complaints',
    icon: 'exclamation-circle',
    bgColor: Colors.blue,
  },
  {
    key: 'PendingApprovals',
    title: 'Pending Approvals',
    icon: 'hourglass-half',
    bgColor: Colors.orange,
  },

  // the empty is created for the last row to fill the space in Columns
  // you can remove it if you want to fill the space with other items
  // or you can add more items to fill the space in the flatlist
  {
    key: 'Empty',
    title: 'Empty',
    icon: Images.calendar,
    bgColor: 'Empty',
  },
];

/// UI function
const Menu: React.FC = () => {
  // Functions

  const handleMenuPress = (screenName: keyof AppStackParamList) => {
    navigate(screenName);
  };

  // render UI function
  const renderItem = ({ item }: { item: MenuItems }) => {
    const { icon, title, key } = item;
    // If the item is 'Empty', return an empty view
    // this is to fill the space in the last row of the FlatList
    // you can remove it if you want to fill the space with other items
    // or you can add more items to fill the space in the flatlist
    if (key === 'Empty') {
      return <View style={styles.emptyBox} />;
    }
    return (
      <TouchableOpacity
        style={styles.box}
        activeOpacity={1}
        onPress={() => handleMenuPress(key)}
      >
        <View style={[styles.innerBox, globalstyles.cardShadowStyle]}>
          <AppIcon type={icons.type} name={icon} />
        </View>
        <Text style={styles.label}>{title}</Text>
      </TouchableOpacity>
    );
  };
  //Main Return
  return (
    <View style={styles.menuContainer}>
      <Text style={styles.menuTitle}>{Labels.menu}</Text>
      <FlatList
        numColumns={4}
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.rowWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(Menu);
