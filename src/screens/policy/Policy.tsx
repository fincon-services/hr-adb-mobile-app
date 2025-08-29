import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import Header from '../../components/header/Header';
import Loader from '../../components/loader/Loader';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { useGetPoliciesQuery } from '../../services/appApi/AppApi';
import { PolicyItem } from '../../types/models/lists';
import styles from './policy.style';
import PolicyCard from './PolicyCard';

const Policy = () => {
  const { data: policiesData, isLoading } = useGetPoliciesQuery('');
  console.log(policiesData, 'sjdfsjdkfjsdkf');

  const renderPolicies = useCallback(({ item }: { item: PolicyItem }) => {
    return <PolicyCard policy={item} />;
  }, []);

  // Main Return
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.nonActiveNotificationIcon}
        title={Labels.policy}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
        additionalStyle={styles.headerStyle}
      />

      <Loader loading={isLoading}>
        <FlatList
          data={policiesData?.data}
          contentContainerStyle={styles.screenContent}
          showsVerticalScrollIndicator={false}
          renderItem={renderPolicies}
        />
      </Loader>
    </View>
  );
};

export default Policy;
