import { pick, types } from '@react-native-documents/picker';
import { Alert } from 'react-native';

export interface FileData {
  name: string;
  size: number;
  uri: string;
  type?: string;
}

export const pickFile = async (
  maxSizeMB: number = 20,
): Promise<FileData | null> => {
  try {
    const [res] = await pick({
      allowMultiSelection: false,
      type: [types.allFiles],
    });
    const sizeBytes = res.size ?? 0;
    const sizeMB = sizeBytes / (1024 * 1024);

    if (sizeMB > maxSizeMB) {
      Alert.alert('File too large', `Max file size is ${maxSizeMB} MB`);
      return null;
    }

    return {
      name: res.name,
      size: res.size ?? 0,
      uri: res.uri,
      type: res.type,
    };
  } catch (err: any) {
    if (err.isCancelled) {
      console.log('User cancelled picker');
    } else {
      console.error('Picker error:', err);
      Alert.alert('Error', 'Unable to select file');
    }
    return null;
  }
};
