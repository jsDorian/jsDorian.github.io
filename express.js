const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

var dir = path.join(__dirname + '/');
var files = [];

fs.readdir(dir, function (err, files) {
	if (err) {
		console.log('Error:', err);
	} else {
		console.log('list of files in', dir + '...');
		
		files.forEach(function (file) {
			files.push(file);
			console.log(file);
		});
	}
});

app.use(express.static(__dirname + '/'));

app.get('/.*', function(req, res) {
	var filename;
	console.log('test');
	
	if (!req.path) {
		res.sendFile(path.join(__dirname + '/index.html'));
	} else {
		for (var i = 0; i < files.length; i++) {
			if (files[i].includes(req.path)) {
				console.log('request for', path.join(__dirname + '/' + files[i]));
				res.sendFile(path.join(__dirname + '/' + files[i]));
				break;
			}
		}
	}
	
});

app.listen(8080);