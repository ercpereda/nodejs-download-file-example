const req = require('request');
const fs = require('fs');

const promise = new Promise((resolve, reject) => {
  req('https://www.bing.com/az/hprichbg/rb/BurchellsZebra_EN-US14692706178_1920x1080.jpg').
    pipe(fs.createWriteStream('image.jpg')).
    on('close', () => { resolve('Download complete!'); }).
    on('error', err => { reject(err); });
});

promise.then( res => console.log(res) ).catch( err => console.log(err));
