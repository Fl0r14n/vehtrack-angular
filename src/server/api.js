var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// mock endpoints using webpack-run-dev built in express server
module.exports.init = function (app) {
  var basePath = '/locamo/de';
  var buildPath = function (endpoint) {
    return basePath + endpoint;
  };
  var serveImage = function (res, filePath) {
    var path = './src/public/medias/' + filePath;
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(fs.readFileSync(path), 'binary');
  };
  var getJsonFile = function (name) {
    var path = './src/server/json/' + name + '.json';
    return fs.readFileSync(path);
  };

  app.use(bodyParser.json());       // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({extended: true})); // to support URL-encoded bodies

  // var router = expres.Router();
  // app.use('/path', router);
};

