const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: './public/images',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
}).single('image');

app.post('/upload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(err);
    }
    res.send('Image uploaded successfully!');
  });
});

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Server started on port', port);
});
