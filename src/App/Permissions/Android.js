import { PermissionsAndroid } from 'react-native';

export async function writeExternalStoragePermissions() {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {title: 'sad', message: 'asdasd'});

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}
