import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Images } from '../../constants/images';
import { User } from '../../types/models/user';
import styles from './home.style';
import { navigate } from '../../navigation/navigationServices';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/slices/AuthSlice';
import { Utility } from '../../utils/Utility';
import LinearGradientWrapper from '../../components/linearGradientWrapper/LinearGradientWrapper';
import AppIcon from '../../components/appIcon/AppIcon';
import { scale } from '../../utils/responsive';
import { icons } from '../../constants/icons';

interface UserCardProps {
  user: User;
}

const UserHomeCard = () => {
  const userStored: User = useSelector(getUser);

  const { name, address, profileImage } = userStored;

  // User Image Profile
  const userImage = {
    uri: Utility.getImageUrl(profileImage),
  };

  // Main Return
  return (
    <LinearGradientWrapper
      direction="leftToRight"
      style={styles.userHomeCardContainer}
    >
      <View style={styles.leftSection}>
        <View style={styles.imageWrapper}>
          {profileImage ? (
            <Image source={Images.profile} style={styles.avatar} />
          ) : (
            <AppIcon
              type={icons.type}
              name={icons.names.userAvatarHolder}
              size={scale(40)}
            />
          )}
        </View>
        <View style={styles.userDetailWrapper}>
          <Text style={styles.name}>{name}!</Text>
          <Text style={styles.designation}>Software Engineer</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigate('Notifications')}>
        <Image
          source={Images.nonActiveNotificationIcon}
          style={styles.bellIcon}
        />
      </TouchableOpacity>
    </LinearGradientWrapper>
  );
};

export default memo(UserHomeCard);
