var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

var server = app.listen(80, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Sandbox Server listening at http://%s:%s', host, port)

});