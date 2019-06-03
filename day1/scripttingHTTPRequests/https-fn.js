//
//
module.exports = function getHTML(options, callback) {

  var https = require('https');

  var chunks = [];
  var returnedString;

  https.get(options, function (res) {

    res.setEncoding('utf8');

    res.on('data', function (chunk) {
      chunks.push(chunk);
    });

    res.on('end', function () {
      returnedString = chunks.join("");
      callback(returnedString);
    });

  });

} //getHTML fn