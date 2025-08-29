import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  CameraOptions,
  ImageLibraryOptions,
} from 'react-native-image-picker';

const cameraOptions: CameraOptions = {
  mediaType: 'photo',
  saveToPhotos: true,
  quality: 0.8,
};

const galleryOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  selectionLimit: 1,
  quality: 0.8,
};

export const openCamera = async (): Promise<ImagePickerResponse> => {
  return await launchCamera(cameraOptions);
};

export const openGallery = async (): Promise<ImagePickerResponse> => {
  return await launchImageLibrary(galleryOptions);
};
