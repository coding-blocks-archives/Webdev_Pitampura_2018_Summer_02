/**
 * Created by rishabhkhanna on 23/07/18.
 */
const util = require('util');

function downloadImage(url, downloaded) {
    setTimeout(()=>{
        if(!url.startsWith("http")){
            return downloaded(new Error("file does not start with http"))
        }
        var imageName = url.split('/').pop();
        downloaded(null,imageName);
    }, 2000)
}

function resizeImage(name, resized) {
    if(!name.endsWith("png")){
        return resized(new Error("image not in png format"));
    }
    setTimeout(()=>{
        resized(null, name.split('.').join("_small."));
    }, 2000)
}

function uploadImage(uploadname, uploaded) {
    setTimeout(()=>{
        uploaded(uploadname)
    },2000)
}

var download  = util.promisify(downloadImage);
var resize = util.promisify(resizeImage);
var upload = util.promisify(uploadImage);

download.then().catch()
