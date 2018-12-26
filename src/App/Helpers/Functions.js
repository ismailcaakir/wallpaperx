import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';
import Wallpaper from 'rnwallpaper';


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

export function setAsWallpaper(imageUrl) {

  Wallpaper.setWallpaper(imageUrl, (res) => {
    Alert.alert("Success", "Added as wallpaper", [ {text: 'Thanks!', onPress: () => openInterstitialAds() },], { cancelable: false });
  });


  /*Alert.alert('Set as Wallpaper', 'Do you approve this picture as wallpaper?', [
    {text: 'Okay!', onPress: () => {
      Wallpaper.setWallpaper(imageUrl, (res) => {
        Alert.alert("Success", "Added as wallpaper", [ {text: 'Thanks!', onPress: () => openInterstitialAds() },], { cancelable: false });
      })
    }},
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
  ])*/


}



export function openInterstitialAds() {
  Alert.alert("Reklam Açıldı.");
}
