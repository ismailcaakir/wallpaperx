import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';


export function downloadImage(url) {
  try{
    var date      = new Date();
    var url       = url;
    var ext       = (/[.]/.exec(url)) ? /[^.]+$/.exec(url) : undefined;
    ext = "." + ext[0];
    const { config, fs } = RNFetchBlob
    let PictureDir = fs.dirs.PictureDir
    let options = {
      fileCache: true,
      addAndroidDownloads : {
        useDownloadManager : true,
        notification : true,
        path:  PictureDir + "/image_" + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
        description : 'Image'
      }
    }
    config(options).fetch('GET', url).then((res) => {
      Alert.alert("Success", "Visual Downloaded Successfully", [ {text: 'Thanks!', onPress: () => openInterstitialAds() },], { cancelable: false });
    })
  } catch (err) {
    console.log(err)
  }
}



export function openInterstitialAds() {
  Alert.alert("Reklam Açıldı.");
}
