#!/usr/bin/env node

var fs     = require('fs');
var path   = require('path');
var mkdirp = require('mkdirp');

var localFile   = path.normalize(__dirname + '/../config/sequelize.js');
var projectFile = path.normalize(process.cwd() + '/../../config/sequelize.js');

try {
  fs.lstatSync(projectFile);
} catch (ex) {
  //unable to stat file because it doesn't exist
  console.log("coppying " + localFile + " to " + projectFile)
  fs.createReadStream(localFile).pipe(fs.createWriteStream(projectFile));
}

['models', 'test/fixtures'].forEach(function(f){
  mkdirp.sync(path.normalize(process.cwd() + '/../../' + f));
});
