import React, { memo, useCallback } from 'react';
import { Image, Text, View } from 'react-native';
import LinearGradientWrapper from '../../components/linearGradientWrapper/LinearGradientWrapper';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { PolicyItem } from '../../types/models/lists';
import { verticalScale } from '../../utils/responsive';
import styles from './policyDetail.style';

interface PolicyCardDetailProps {
  policyItem: PolicyItem;
}
const PolicyDetailCard: React.FC<PolicyCardDetailProps> = ({ policyItem }) => {
  const { id, description, policy_type } = policyItem;

  // render top policy info
  const renderPolicyCard = useCallback(() => {
    return (
      <LinearGradientWrapper
        direction="leftToRight"
        style={styles.policyCardContainer}
      >
        <Image source={Images.policySecureIcon} />
        <View style={{ width: '80%', gap: verticalScale(10) }}>
          <Text style={styles.title}>Comunity policy TITLE</Text>
          <View style={styles.detailWrapper}>
            <View style={styles.textContainer}>
              <Text style={styles.headingText}>{Labels.createdOn}</Text>
              <Text style={styles.headingText}>{Labels.preparedBy}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.valueText}>2025-10-9</Text>
              <Text style={styles.valueText}>Affan Ahmed</Text>
            </View>
          </View>
        </View>
      </LinearGradientWrapper>
    );
  }, []);
  // const renderSideCuts = ({ side }: { side: 'right' | 'left' }) => (
  //   <View
  //     style={{
  //       gap: verticalScale(6),
  //       position: 'absolute',
  //       right: side === 'right' ? -10 : null,
  //       left: side === 'left' ? -10 : null,
  //       top: verticalScale(28),
  //     }}
  //   >
  //     <View
  //       style={{
  //         height: verticalScale(20),
  //         width: horizontalScale(20),
  //         borderWidth: 2,
  //         borderColor: Colors.borderPrimary,
  //         backgroundColor: Colors.white,
  //         borderRadius: 100,
  //       }}
  //     ></View>
  //     <View
  //       style={{
  //         height: verticalScale(20),
  //         width: horizontalScale(20),
  //         borderWidth: 2,
  //         borderColor: Colors.borderPrimary,
  //         backgroundColor: Colors.white,
  //         borderRadius: 100,
  //       }}
  //     ></View>
  //   </View>
  // );
  // Mian return
  return (
    <View style={{ gap: verticalScale(25) }}>
      {renderPolicyCard()}
      {/* <Button /> */}
      {/* <View style={{ borderRadius: 12, overflow: 'hidden' }}>
        <View
          style={{
            width: '100%',
            backgroundColor: Colors.themeColor,
            paddingVertical: verticalScale(23),
            height: verticalScale(100),
            overflow: 'hidden',
          }}
        >
          {renderSideCuts({ side: 'right' })}
          {renderSideCuts({ side: 'left' })}
        </View>
      </View> */}
    </View>
  );
};

export default memo(PolicyDetailCard);
