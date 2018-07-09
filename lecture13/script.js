/**
 * Created by rishabhkhanna on 09/07/18.
 */
const http = require('http');



http.get('http://example.com', (res)=>{
    res.on('data', (chunk)=>{
        console.log(chunk.toString());
    })

    res.on('end', ()=>{
        console.log("all Data downloaded");
    })
})



