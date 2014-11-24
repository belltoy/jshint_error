var a = {};

for(var i in a) {
    // Make forin check just reach the maxerr limit,
    // and jshint will skip this file left the uncleaned environment.
    // if (a.hasOwnProperty(i)) {
        console.log('key:', i, 'value:', a[i]);
    // }
}
