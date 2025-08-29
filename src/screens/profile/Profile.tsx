import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import InfoDetail from '../../components/infoDetail/InfoDetail';
import Loader from '../../components/loader/Loader';
import { Colors } from '../../constants/colors';
import globalstyles from '../../constants/globalstyles';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { useGetUserProfileQuery } from '../../services/appApi/AppApi';
import { getUser, logout } from '../../store/slices/AuthSlice';
import { User } from '../../types/models/user';
import styles from './profile.style';
import { populateDemographicsData, populateUserJobDetail } from './profileData';
import UserProfileCard from './UserProfileCard';

const Profile = ({}) => {
  const dispatch = useDispatch();
  // store value

  // the loggedIn Employee_Id to fetch the employee detail
  const userStored: User = useSelector(getUser);

  // API initializing
  const { data: userProfileDetail, isLoading } = useGetUserProfileQuery(
    userStored.employee_id,
  );
  const userProfile = userProfileDetail?.data;

  // const userDemographicDetails = {
  //   title: Labels.DemographicDetails.title,
  //   data: [
  //     { title: Labels.DemographicDetails.so, value: '-' },
  //     {
  //       title: Labels.DemographicDetails.dateOfBirth,
  //       value: userProfile?.date_of_birth,
  //     },
  //     {
  //       title: Labels.DemographicDetails.gender,
  //       value: userProfile?.gender?.name,
  //     },
  //     {
  //       title: Labels.DemographicDetails.maritalStatus,
  //       value: userProfile?.marital?.name,
  //     },
  //     {
  //       title: Labels.DemographicDetails.religion,
  //       value: userProfile?.religion?.name,
  //     },
  //     {
  //       title: Labels.DemographicDetails.phoneNo,
  //       value: userProfile?.phone_no,
  //     },
  //     {
  //       title: Labels.DemographicDetails.emergencyNo,
  //       value: userProfile?.emergency_no,
  //     },
  //     { title: Labels.DemographicDetails.cnic, value: userProfile?.cnic },
  //     {
  //       title: Labels.DemographicDetails.cnicIssuance,
  //       value: userProfile?.cnic_issuance,
  //     },
  //     {
  //       title: Labels.DemographicDetails.cnicExpiry,
  //       value: userProfile?.cnic_expiry,
  //     },
  //     {
  //       title: Labels.DemographicDetails.personalEmail,
  //       value: userProfile?.personal_email,
  //     },
  //     {
  //       title: Labels.DemographicDetails.officialEmail,
  //       value: userProfile?.offical_email,
  //     },
  //     {
  //       title: Labels.DemographicDetails.bloodGroup,
  //       value: userProfile?.blood_group_name?.name,
  //     },
  //     {
  //       title: Labels.DemographicDetails.exemptedFromAttendance,
  //       value: userProfile?.attendance_exemption,
  //     },
  //     {
  //       title: Labels.DemographicDetails.timeSheetRequired,
  //       value: userProfile?.timesheet_status,
  //     },
  //     {
  //       title: Labels.DemographicDetails.district,
  //       value: userProfile?.district?.name,
  //     },
  //     {
  //       title: Labels.DemographicDetails.residentialAddress,
  //       value: userProfile?.residential_address,
  //     },
  //     {
  //       title: Labels.DemographicDetails.permanentAddress,
  //       value: userProfile?.permanent_address,
  //     },
  //   ],
  // };

  //
  // const userJobDetails = {
  //   title: Labels.JobDetails.title,
  //   data: [
  //     {
  //       title: Labels.JobDetails.headOffice,
  //       value: userProfile?.head_office?.name,
  //     },
  //     {
  //       title: Labels.JobDetails.branchOffice,
  //       value: userProfile?.branch_office?.name,
  //     },
  //     {
  //       title: Labels.JobDetails.designation,
  //       value: userProfile?.designation?.name,
  //     },
  //     {
  //       title: Labels.JobDetails.reportTo,
  //       value: userProfile?.report_to?.name,
  //     },
  //     {
  //       title: Labels.JobDetails.department,
  //       value: userProfile?.department?.name,
  //     },
  //     {
  //       title: Labels.JobDetails.employeeType,
  //       value: userProfile?.employee_type,
  //     },
  //     { title: Labels.JobDetails.shift, value: userProfile?.shift?.name },
  //     {
  //       title: Labels.JobDetails.referenceType,
  //       value: userProfile?.reference_name?.name,
  //     },
  //     { title: Labels.JobDetails.grade, value: userProfile?.grade?.grading },
  //   ],
  // };

  // Logout function
  const handleLogout = () => {
    dispatch(logout());
  };

  // Data population from
  const userDemographicDetails = populateDemographicsData(userProfile);
  const userJobDetails = populateUserJobDetail(userProfile);

  //Main Return
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
        {/* User Profile TOP Card */}
        {userProfile && (
          <View style={globalstyles.pT(55)}>
            <UserProfileCard userData={userProfile} />
          </View>
        )}
        <ScrollView
          contentContainerStyle={styles.screenContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Demographic Details */}
          <InfoDetail
            infoTitle={userDemographicDetails?.title}
            infoDetailData={userDemographicDetails.data}
          />
          {/* Job Details */}
          <InfoDetail
            infoTitle={userJobDetails?.title}
            infoDetailData={userJobDetails.data}
          />

          <Text
            style={{ color: Colors.red, alignSelf: 'center', marginTop: 50 }}
            onPress={() => handleLogout()}
          >
            Testing Logout
          </Text>
        </ScrollView>
      </Loader>
    </View>
  );
};

export default Profile;
