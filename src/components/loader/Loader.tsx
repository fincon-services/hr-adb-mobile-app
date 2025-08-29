import React, { memo, ReactNode } from 'react';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';
import { Colors } from '../../constants/colors';
import styles from './loader.style';

interface LoaderWrapperProps {
  loading: boolean;
  children?: ReactNode;
  styleContainer?: StyleProp<ViewStyle>;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({
  loading,
  children,
  styleContainer,
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {loading ? (
        <View style={styles.loaderOverlay}>
          <ActivityIndicator size="large" color={Colors.themeColor} />
        </View>
      ) : (
        children
      )}
    </View>
  );
};

export default memo(LoaderWrapper);
