import React, { memo } from 'react';
import { Text, View } from 'react-native';
import styles from './progressBar.style';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.container}>
      {/* Label */}
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{clampedProgress}%</Text>
      </View>

      {/* Bar */}
      <View style={styles.barBackground}>
        <View style={[styles.barFill, { width: `${clampedProgress}%` }]} />
      </View>
    </View>
  );
};

export default memo(ProgressBar);
