import RNFS from 'react-native-fs';
import { Platform, PermissionsAndroid, Alert } from 'react-native';

export const downloadFile = async (url: string, filename: string) => {
  try {
    // Android permission handling
    if (Platform.OS === 'android' && Platform.Version < 33) {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);

      const readGranted =
        granted['android.permission.READ_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED;
      const writeGranted =
        granted['android.permission.WRITE_EXTERNAL_STORAGE'] ===
        PermissionsAndroid.RESULTS.GRANTED;

      if (!readGranted || !writeGranted) {
        Alert.alert(
          'Permission Denied',
          'Storage permission is required to save files.',
        );
        return;
      }
    }

    // Define download path
    const downloadDest =
      Platform.OS === 'android'
        ? `${RNFS.DownloadDirectoryPath}/${filename}`
        : `${RNFS.DocumentDirectoryPath}/${filename}`;

    // Start downloading
    const options = {
      fromUrl: url,
      toFile: downloadDest,
    };

    const { promise } = RNFS.downloadFile(options);
    const result = await promise;

    if (result.statusCode === 200) {
      Alert.alert('Download Complete', `File saved to: ${downloadDest}`);
      return downloadDest;
    } else {
      throw new Error(`Failed with status code: ${result.statusCode}`);
    }
  } catch (error: any) {
    console.error('Download error:', error);
    Alert.alert('Download Failed', error.message);
  }
};
