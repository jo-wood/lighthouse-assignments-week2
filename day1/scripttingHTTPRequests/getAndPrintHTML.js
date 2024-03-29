
//  buffer the incoming data (loop through and store, print all together when data is done returning)

var https = require('https');

function getAndPrintHTML() {
    // preference to how the data chunks are stored?
  var chunks = [];
  var returnedString;

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (res) {

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
      console.log('Chunk Received. Length: ', chunk.length + '\n');
        // buffer data:
      chunks.push(chunk);
    });

    res.on('end', function () {
      console.log('Response is complete... \n');
      returnedString = chunks.join(' ');
      console.log(returnedString);
    }); 

  });


} // end of getAndPrintHTML 


getAndPrintHTML();