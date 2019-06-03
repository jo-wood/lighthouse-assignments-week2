

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html',
  method: 'GET'
};

function getAndPrintHTML(options) {

  var chunks = [];
  var returnedString;

  callback = function (res) {

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
      chunks.push(chunk);
    });

    res.on('end', function () {
      returnedString = chunks.join("");
      console.log(returnedString);

    });

    return returnedString;

  }; // callback fn

  var req = https.request(options, callback);
  req.end();
  console.log(req);
  console.log(returnedString);



  return req;

} //getAndPrintHTML fn

console.log('result: ' + getAndPrintHTML(requestOptions));