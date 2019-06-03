

var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function printHTML(html) {
  console.log('This prints inside printHTML: \n ' + html);
}

function getHTML(options, callback) {

  var chunks = [];
  var returnedString;

  https.get(options, function(res) {

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


getHTML(requestOptions, printHTML);