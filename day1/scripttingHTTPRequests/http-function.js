
var getHTML = require('./https-fn');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function printHTML(html) {
  console.log('This prints inside printHTML: \n ' + html);
}


getHTML(requestOptions, printHTML);