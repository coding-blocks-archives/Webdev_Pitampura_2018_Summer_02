/**
 * Created by rishabhkhanna on 23/07/18.
 */
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

downloadImage("ftp://codingblocks.com/assets/images/cb/cblogo.png", (err,name)=>{
    console.log("image downloaded with name " + name);
    if(err) throw err;
    resizeImage(name, (err, resizeName)=>{
        if(err) throw err;
        console.log("image resized with name " + resizeName );
        uploadImage(resizeName, (uploadedName)=>{
            console.log("picture uploaded with name " + uploadedName);
        })
    })
})
