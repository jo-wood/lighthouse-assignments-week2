

var getHTML = require('./https-fn.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(html) {
  var charsArray = html.split('');
  console.log(charsArray.reverse().join(''));
}

getHTML(requestOptions, reverse);
