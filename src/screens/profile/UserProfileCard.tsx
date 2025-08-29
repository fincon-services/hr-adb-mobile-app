import React, { memo } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import AppIcon from '../../components/appIcon/AppIcon';
import LinearGradientWrapper from '../../components/linearGradientWrapper/LinearGradientWrapper';
import { Colors } from '../../constants/colors';
import { icons } from '../../constants/icons';
import { Labels } from '../../constants/labels';
import { Employee } from '../../types/models/user';
import { scale, verticalScale } from '../../utils/responsive';
import { Utility } from '../../utils/Utility';
import styles from './profile.style';
import LabelValue from '../../components/labelValue/LabelValue';
import { openCamera, openGallery } from '../../utils/MediaUtils';
import { useMediaPermissions } from '../../hooks/useMediaPermissions';

interface UserProfileProps {
  userData: Employee;
}

const UserProfileCard: React.FC<UserProfileProps> = ({ userData }) => {
  //
  const { hasPermission, requestPermissions } = useMediaPermissions();
  // const userData: User = useSelector(getUser);
  const { emp_profile, name, designation, employee_no, department } = userData;
  // user Image URL
  const profileImage = { uri: Utility.getImageUrl(emp_profile) };

  // function to Update user profile Image API
  // const handleUpdateUserProfile = async (image: Asset) => {
  //   const formData = new FormData();
  //   formData.append('email', userStored?.email);
  //   formData.append('profile_image', {
  //     uri: image.uri,
  //     name: image.fileName,
  //     type: image.type,
  //   });
  //   try {
  //     updateUserProfile(formData)
  //       .unwrap()
  //       .then(response => {
  //         console.log(response?.data, 'response?.data');
  //         dispatch(setUser(response?.data));
  //         setSelectedProfileImage(null);
  //         setSelectedProfileImage(image);
  //       })
  //       .catch(err => {
  //         console.log(err, 'dfsksdkfjdksjf');
  //       });
  //   } catch (error) {
  //     console.error('Failed to update profile:', error);
  //   }
  // };

  const handleImageChange = async () => {
    if (!hasPermission) {
      await requestPermissions();
      return;
    }

    Alert.alert('Update Profile Photo', 'Choose an option', [
      {
        text: 'Camera',
        onPress: async () => {
          const result = await openCamera();
          if (result.didCancel) return;
          if (result.errorCode) {
            Alert.alert('Error', result.errorMessage || 'Camera error');
            return;
          }
          const image = result.assets?.[0];
          // image && handleUpdateUserProfile(image);
        },
      },
      {
        text: 'Gallery',
        onPress: async () => {
          const result = await openGallery();
          if (result.didCancel) return;
          if (result.errorCode) {
            Alert.alert('Error', result.errorMessage || 'Gallery error');
            return;
          }
          const image = result.assets?.[0];
          // image && handleUpdateUserProfile(image);
        },
      },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };
  // Main Return
  return (
    <LinearGradientWrapper style={styles.userCardContainer} direction="card">
      <View style={styles.userAvatarWrapper}>
        <View style={styles.imageWrapper}>
          {emp_profile ? (
            <Image source={profileImage} style={styles.avatar} />
          ) : (
            <AppIcon
              type={icons.type}
              name={icons.names.userAvatarHolder}
              size={scale(120)}
            />
          )}
          <TouchableOpacity
            style={styles.editAvatar}
            onPress={() => handleImageChange()}
          >
            <View style={styles.editIconWrapper}>
              <AppIcon
                type={icons.type}
                name={icons.names.edit}
                size={scale(18)}
                color={Colors.white}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ gap: verticalScale(8) }}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.designationText}>
            {designation?.name || 'CEO'}
          </Text>
        </View>
      </View>
      {/* User Detail */}
      <View style={styles.userDetailWrapper}>
        <LabelValue
          titleLeft={Labels.employeeId}
          titleRight={Labels.department}
          valueLeft={employee_no ?? ''}
          valueRight={department?.name ?? ''}
        />
      </View>
      {/*  */}
    </LinearGradientWrapper>
  );
};

export default memo(UserProfileCard);
