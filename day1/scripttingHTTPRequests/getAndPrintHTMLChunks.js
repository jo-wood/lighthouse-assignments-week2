
// adding request outside of the function as README should indicate what modules 
// are needed to run the project 

var https = require('https');


function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
    // https request
  https.get(requestOptions, function (res) {
    res.setEncoding('utf8');

    res.on('data', function (data) {
      console.log('Chunk Received. Length: ', data.length + '\n');      
    })
  });

}

getAndPrintHTMLChunks();