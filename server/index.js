
require("dotenv").config();
const express = require("express");
const { SERVER_PORT} = process.env;
const app = express();


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

app.get('/api/getVideo', (req, res, next) => {
  res.status(200).send(testVid)
})

// app.get('/api/watch', function(req, res) {
//   const path = ''
//   const stat = fs.statSync(path)
//   const fileSize = stat.size
//   const range = req.headers.range
//   if (range) {
//     const parts = range.replace(/bytes=/, "").split("-")
//     const start = parseInt(parts[0], 10)
//     const end = parts[1] 
//       ? parseInt(parts[1], 10)
//       : fileSize-1
//     const chunksize = (end-start)+1
//     const file = fs.createReadStream(path, {start, end})
//     const head = {
//       'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//       'Accept-Ranges': 'bytes',
//       'Content-Length': chunksize,
//       'Content-Type': 'video/mp4',
//     }
//     res.writeHead(206, head);
//     file.pipe(res);
//   } else {
//     const head = {
//       'Content-Length': fileSize,
//       'Content-Type': 'video/mp4',
//     }
//     res.writeHead(200, head)
//     fs.createReadStream(path).pipe(res)
//   }
// });



app.listen(SERVER_PORT, () =>
  console.log(`Servin' up some 🔥 🔥 🔥 on Port ${SERVER_PORT}`)
);