
require("dotenv").config();
const express = require("express");
const { SERVER_PORT} = process.env;
const {postVideo} = require('./controller/controller')
const multer = require('multer')
const cors = require('cors');
const app = express();
app.use(cors())
var http = require('http'),
    fs = require('fs'),
    util = require('util');

http.createServer(function (req, res) {
  var path = 'video.mp4';
  var stat = fs.statSync(path);
  var total = stat.size;
  if (req.headers['range']) {
    var range = req.headers.range;
    var parts = range.replace(/bytes=/, "").split("-");
    var partialstart = parts[0];
    var partialend = parts[1];

    var start = parseInt(partialstart, 10);
    var end = partialend ? parseInt(partialend, 10) : total-1;
    var chunksize = (end-start)+1;
    console.log('RANGE: ' + start + ' - ' + end + ' = ' + chunksize);

    var file = fs.createReadStream(path, {start: start, end: end});
    res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
    file.pipe(res);
  } else {
    console.log('ALL: ' + total);
    res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
    fs.createReadStream(path).pipe(res);
  }
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
var upload = multer({ storage: storage }).array('file')

//video endpoints
app.post('/api/video',function(req, res) {
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});



app.listen(SERVER_PORT, () =>
  console.log(`Servin' up some 🔥 🔥 🔥 on Port ${SERVER_PORT}`)
);