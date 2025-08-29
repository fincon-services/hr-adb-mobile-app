import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FileData, pickFile } from '../../utils/FilePicker';
import styles from './attachFile.style';
import { Images } from '../../constants/images';

interface AttachFileProps {
  maxSizeMB?: number;
  onFileSelect?: (file: FileData | null) => void;
}

const AttachFile: React.FC<AttachFileProps> = ({
  maxSizeMB = 20,
  onFileSelect,
}) => {
  const [file, setFile] = useState<FileData | null>(null);

  const handlePick = async () => {
    const selected = await pickFile(maxSizeMB);
    if (selected) {
      setFile(selected);
      onFileSelect?.(selected);
    }
  };

  const removeFile = () => {
    setFile(null);
    onFileSelect?.(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.attachText}>Attach File (optional)</Text>
      <Text style={styles.fileSizeText}>Max file is 20MB</Text>

      {file ? (
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>{file.name}</Text>
          <Text style={styles.fileSize}>
            {(file.size / (1024 * 1024)).toFixed(2)} MB
          </Text>
          <TouchableOpacity onPress={removeFile}>
            <Text style={styles.remove}>✕</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handlePick}
        >
          <Image source={Images.addIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AttachFile;
