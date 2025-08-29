import { View, Text } from 'react-native';
import React from 'react';
import styles from './notifications.style';
import Header from '../../components/header/Header';
import { Images } from '../../constants/images';
import { goBack, navigate } from '../../navigation/navigationServices';
import { Labels } from '../../constants/labels';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.activeBellIcon}
        title={Labels.notification}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
      />
    </View>
  );
};

export default Notifications;
