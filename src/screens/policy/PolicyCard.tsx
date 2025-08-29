import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import AppIcon from '../../components/appIcon/AppIcon';
import LabelValue from '../../components/labelValue/LabelValue';
import LinearGradientWrapper from '../../components/linearGradientWrapper/LinearGradientWrapper';
import { icons } from '../../constants/icons';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { PolicyItem } from '../../types/models/lists';
import { downloadFile } from '../../utils/FileDownloader';
import { verticalScale } from '../../utils/responsive';
import { Utility } from '../../utils/Utility';
import styles from './policy.style';

interface PolicyCardProp {
  policy: PolicyItem;
}

const PolicyCard: React.FC<PolicyCardProp> = ({ policy }) => {
  const { description, id, created_by, created_at, attachment } = policy || {};
  console.log(policy, 'kjsdjfksdjfk');
  const handleDownloadButton = () => {
    downloadFile(Utility.getUrl(attachment), 'sample.pdf');
  };

  // Main Return
  return (
    <LinearGradientWrapper
      direction="leftToRight"
      style={styles.policyCardContainer}
    >
      <Image source={Images.policySecureIcon} />
      <View style={{ width: '84%', gap: verticalScale(10) }}>
        <Text style={styles.title}>{description}</Text>
        <LabelValue
          titleLeft={Labels.createdOn}
          titleRight={Labels.preparedBy}
          valueLeft={Utility.formatDateToNum(created_at)}
          valueRight={created_by.name ?? ''}
        />
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleDownloadButton}
          >
            <AppIcon type={icons.type} name={icons.names.download} size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradientWrapper>
  );
};

export default memo(PolicyCard);
