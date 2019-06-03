
// adding request outside of the function as README should indicate what modules 
// are needed to run the project 

var request = require('https');


function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
    // https request
  request.get(requestOptions, function (res) {
    res.setEncoding('utf8');

    res.on('data', function (data) {
      console.log('Chunk Received. Length: ', data.length + '\n');      
    })
  });

}