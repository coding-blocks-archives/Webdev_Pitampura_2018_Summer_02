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

var downloaded = downloadImage("https://codingblocks.com/assets/images/cb/cblogo.png")
    .then(resizeImage)

setTimeout(()=>{
    downloaded.then(uploadImage)
        .then(()=>{
        console.log("ALL DONE");
        })
}, 2000);
    // .then(uploadImage)
    // .then(()=>{
    //     console.log("ALL DONE");
    // })
    // .catch(function (err) {
    //     console.log(err);
    // })

// async function downloadTask() {
//     try {
//         var downloadedName = await downloadImage("https://codingblocks.com/assets/images/cb/cblogo.png");
//         var resizeName = await resizeImage(downloadedName)
//         await uploadImage(resizeName);
//         console.log("ALL DONE");
//     }catch(err){
//         console.log(err);
//     }
// }

