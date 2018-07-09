/**
 * Created by rishabhkhanna on 09/07/18.
 */

const resize = require('resize-img');
const  fs = require('fs');

resize(fs.readFileSync('./path.png'), {width: 100, height: 50}).
then(buf => {
    fs.writeFileSync('cb-128x128.png', buf);
});