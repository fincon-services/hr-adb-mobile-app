import { RouteProp } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../../components/header/Header';
import InfoDetail from '../../components/infoDetail/InfoDetail';
import LinearGradientWrapper from '../../components/linearGradientWrapper/LinearGradientWrapper';
import Loader from '../../components/loader/Loader';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { AppStackParamList } from '../../navigation/navigationTypes';
import { useGetLeaveDetailsQuery } from '../../services/appApi/AppApi';
import { LeaveItem } from '../../types/models/lists';
import { Utility } from '../../utils/Utility';
import { populateLeaveDetails } from './leaveData';
import styles from './leaveDetails.style';

interface LeaveDetailProps {
  route: RouteProp<AppStackParamList, 'LeaveDetails'>;
}
const LeaveDetails: React.FC<LeaveDetailProps> = ({ route }) => {
  // Params
  const { leaveId } = route?.params;
  // API
  const { data: leaveDetailData, isLoading } = useGetLeaveDetailsQuery(leaveId);
  const leave: LeaveItem | undefined = leaveDetailData?.data?.leave;
  const leaveDetails = leave ? populateLeaveDetails(leave) : null;

  // render top  info
  const renderBannerCard = useCallback(() => {
    const title = leave?.leave_type?.name;
    const statusMap = Utility.getLeaveStatus(leave?.approval_status || '');
    return (
      <LinearGradientWrapper
        direction="leftToRight"
        style={styles.leaveCardContainer}
      >
        <Image source={Images.personCalendar} />
        <View style={styles.leaveDetailWrapper}>
          <Text style={styles.title}>{title}</Text>
          <View
            style={[
              styles.statusContainer,
              { backgroundColor: statusMap?.color },
            ]}
          >
            <Text style={styles.valueText}>{statusMap?.name}</Text>
          </View>
        </View>
      </LinearGradientWrapper>
    );
  }, [leave]);

  // Main Return
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.nonActiveNotificationIcon}
        title={Labels.leaveManagement}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
      />

      <Loader loading={isLoading} styleContainer={styles.screenContent}>
        {renderBannerCard()}
        {/* Leave Details */}
        {leaveDetails && (
          <InfoDetail
            infoTitle={leaveDetails.title}
            infoDetailData={leaveDetails.data}
          />
        )}
      </Loader>
    </View>
  );
};

export default LeaveDetails;
