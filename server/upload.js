const IncomingForm = require("formidable").IncomingForm;

module.exports = {
  upload: (req, res) => {
    var form = new IncomingForm();
    form.on("file", (field, file) => {
      let imageFile = file;

      imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function (
        err
      ) {
        if (err) {
          return res.status(500).send(err);
        }

        res.json({ file: `public/${req.body.filename}.jpg` });
      });
      // Do something with the file
      // e.g. save it to the database
      // you can access it using file.path
    });
    console.log('form after', form)
    console.log('form._events.file after', form)
    let imageFile = form._events.file

    imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function (
      err
    ) {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({ file: `public/${req.body.filename}.jpg` });
    });
    console.log('form after', form)
    form.on("end", () => {
      res.json();
    });
    form.parse(req);
  },
};
