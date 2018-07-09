/**
 * Created by rishabhkhanna on 09/07/18.
 */

const request = require('request');

request.get('http://example.com', (err, response, body)=>{
    console.log(body);
})
