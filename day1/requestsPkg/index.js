
// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

//! using request module here (installed last time but didn't use)
//* request handles the .on('data') and .on('end) event automatically piping 
//* the data into whatever we tell it to
// the other https.get() was using different method & arguments

function future(){

  console.log('Downloading image... ');
  
  request.get('https://sytantris.github.io/http-examples/future.jpg') // Note 1

    .on('error', function (err) { // Note 2
      console.log('Error: ' + err);
    })
    .on('response', function (response) { // Note 3
      console.log('Response Status Code: ', response.statusCode);
      console.log('Response Message: ', response.statusMessage);
      console.log('Response ContentType: ', response.headers['content-type']);
    })
    .on('end', () => {
      console.log('Download complete!');
    })
    .pipe(fs.createWriteStream('./future.jpg'));

}

future();


// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?
