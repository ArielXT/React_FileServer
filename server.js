const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());


app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'Ningun archivo fue subido!' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({
      fileName: file.name, filePath: `/uploads/${file.name}`
    });
    console.log('La imagen ' + file.name + ' fue subida exitosamente!');
  });
});

app.listen(5000, () => console.log('Server iniciado en el puerto: http://localhost:3000'));
