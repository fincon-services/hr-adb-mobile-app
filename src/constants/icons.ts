import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

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

// All valid icon sets
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

// Type for your `icons` object
type IconConfig<T extends IconSet> = {
  type: T;
  names: Record<string, string>;
};

export const icons: IconConfig<'FontAwesome'> = {
  type: 'FontAwesome',
  names: {
    download: 'download',
    eye: 'eye',
    policy: 'file-text-o',
    pending: 'hourglass-half',
    user: 'user',
    calendar: 'calendar',
    userLeaves: 'user-times',
    salarySlip: 'list-alt',
    complaints: 'exclamation-circle',
    userAvatarHolder: 'user-circle',
    edit: 'edit',
  },
};
