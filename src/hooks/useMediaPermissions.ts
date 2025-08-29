import { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export const useMediaPermissions = () => {
  const [hasPermission, setHasPermission] = useState(false);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      setHasPermission(
        granted['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.READ_MEDIA_IMAGES'] ===
            PermissionsAndroid.RESULTS.GRANTED,
      );
    } else {
      const cameraStatus = await request(PERMISSIONS.IOS.CAMERA);
      const photoStatus = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      setHasPermission(
        cameraStatus === RESULTS.GRANTED && photoStatus === RESULTS.GRANTED,
      );
    }
  };

  useEffect(() => {
    requestPermissions();
  }, []);

  return { hasPermission, requestPermissions };
};
