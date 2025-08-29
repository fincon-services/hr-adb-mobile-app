import React, { memo, useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './infoDetail.style';

type DetailTypes = {
  title: string;
  value: string | number | undefined | null;
};
interface InfoDetailProps {
  infoDetailData: DetailTypes[];
  infoTitle: string;
}
const InfoDetail: React.FC<InfoDetailProps> = ({
  infoDetailData,
  infoTitle,
}) => {
  ///
  const renderTitleTextUI = useCallback(({ item }: { item: DetailTypes }) => {
    const { title, value } = item;
    return (
      <View style={styles.detailRow}>
        <Text style={styles.detailTitle}>{title} :</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    );
  }, []);

  // Main Return
  return (
    <View style={styles.container}>
      <Text style={styles.infoTitle}>{infoTitle}</Text>
      <FlatList
        data={infoDetailData}
        renderItem={renderTitleTextUI}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(InfoDetail);
