import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import Header from '../../components/header/Header';
import Loader from '../../components/loader/Loader';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { AppStackParamList } from '../../navigation/navigationTypes';
import { useGetPolicyDetailQuery } from '../../services/appApi/AppApi';
import styles from './policyDetail.style';
import PolicyDetailCard from './PolicyDetailCard';

interface PolicyDetailProps {
  route: RouteProp<AppStackParamList, 'PolicyDetail'>;
}

const PolicyDetail: React.FC<PolicyDetailProps> = ({ route }) => {
  // routing params
  const { policyId } = route?.params;
  const { data: policyDetail, isLoading } = useGetPolicyDetailQuery(policyId);
  const policy = policyDetail?.data?.policy;

  // Main Return
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.nonActiveNotificationIcon}
        title={Labels.profile}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
      />
      <Loader loading={isLoading}>
        {policy && <PolicyDetailCard policyItem={policy} />}
      </Loader>
    </View>
  );
};

export default PolicyDetail;
