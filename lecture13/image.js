/**
 * Created by rishabhkhanna on 09/07/18.
 */
const https = require('https');
const fs = require('fs');

https
    .get('https://codingblocks.com/assets/images/cb/cblogo.png',
        (res)=>{

        let imageData = '';

        // res.on('data', (chunk)=>{
        //     console.log(chunk);
        //     fs.writeFile(
        //         __dirname + "/path.png",
        //         chunk,
        //         {flag: 'a'},
        //         (err)=>{
        //             console.error(err);
        //         }
        //     )
        // })

            res.setEncoding('binary');

            res.on('data',(chunk)=>{
                imageData += chunk;
            })

            res.on('end', ()=>{
                // console.log("IMAGE DOWNLOADED");
                fs.writeFile(
                    __dirname + "/image2.png",
                    imageData,
                    'binary',
                    (err)=>{
                        console.log(err);
                    }
                )
            })

})
