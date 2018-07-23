/**
 * Created by rishabhkhanna on 23/07/18.
 */
function downloadImage(url) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!url.startsWith("http")){
                return reject(new Error("file does not start with http"))
            }
            var imageName = url.split('/').pop();
            resolve(imageName);
            console.log("image downloaded " + imageName );
        }, 2000)
    })

}

function resizeImage(name) {
    return new Promise((resolve, reject)=>{
        if(!name.endsWith("png")){
            return reject(new Error("image not in png format"));
        }
        setTimeout(()=>{
            resolve(name.split('.').join("_small."));
            console.log("image resized name " + name.split('.').join("_small."))
        }, 2000)
    })

}

function uploadImage(uploadname) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(uploadname)
            console.log("image uploaded");
        },2000)
    })

}

downloadImage("https://codingblocks.com/assets/images/cb/cblogo.png")
    .then(resizeImage)
    .then(uploadImage)
    .then(()=>{
    console.log("ALL DONE");
    })
    .catch(function (err) {
        console.log(err);
    })

