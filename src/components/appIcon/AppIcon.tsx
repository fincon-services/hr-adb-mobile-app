// src/components/common/AppIcon.tsx

import React, { memo } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Colors } from '../../constants/colors';
import { scale } from '../../utils/responsive';

type IconSet =
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Ionicons'
  | 'Feather'
  | 'AntDesign'
  | 'Entypo'
  | 'SimpleLineIcons'
  | 'Octicons'
  | 'Zocial'
  | 'EvilIcons'
  | 'Fontisto';

const ICON_SETS: Record<IconSet, any> = {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Zocial,
  EvilIcons,
  Fontisto,
};

interface AppIconProps {
  name: string;
  size?: number;
  color?: string;
  type: IconSet;
  style?: object;
}

const AppIcon: React.FC<AppIconProps> = ({
  name,
  size = scale(30),
  color = Colors.themeColor, // Default color
  type,
  style,
}) => {
  const IconComponent = ICON_SETS[type];
  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default memo(AppIcon);
