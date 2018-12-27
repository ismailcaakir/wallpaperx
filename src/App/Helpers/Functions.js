import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';


export async function downloadImage(imageURL) {

    const date = new Date();
    const url = imageURL;
    let ext = (/[.]/.exec(url)) ? /[^.]+$/.exec(url) : undefined;

    ext = "." + ext[0];

    const { config, fs } = RNFetchBlob;

    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads : {
        useDownloadManager : true,
        notification : true,
        path:  PictureDir + "/image_" + Math.floor(date.getTime() + date.getSeconds() / 2) + ext,
        description : 'Image'
      }
    };

    let data = null;

    await config(options).fetch('GET', url).then((res) => {
      data = res;
    });

    return data;
}

export async function setAsWallpaper(imageURL) {
    return data;
}



export function openInterstitialAds() {
  Alert.alert("Reklam Açıldı.");
}
