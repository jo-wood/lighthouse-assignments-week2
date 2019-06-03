
//  buffer the incoming data (loop through and store, print all together when data is done returning)

var request = require('https');

function getAndPrintHTML() {
    // preference to how the data chunks are stored?
  var chunks = [];
  var result;

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
    // https request
    result = request.get(requestOptions, function (res) {
      var returnedString;

      res.setEncoding('utf8');

      res.on('data', function (data) {
        console.log('Chunk Received. Length: ', data.length + '\n');

        //* buffer data:
        chunks.push(data.toString());
      })

      return returnedString = res.on('end', function () {
          console.log('Response is complete...');
        var combineChunksResult = chunks.join(' ');
        return combineChunksResult;
      });      
    });

  console.log(result);
}


getAndPrintHTML();