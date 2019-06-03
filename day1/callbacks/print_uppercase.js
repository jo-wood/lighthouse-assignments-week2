
var getHTML = require('./https-fn.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function uppercase(html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, uppercase);
