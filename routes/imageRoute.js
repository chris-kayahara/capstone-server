const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController');
const multer = require('multer');
// const upload = multer({ dest: 'public/images/' })
const path = require('path');
const knex = require('knex')(require('../knexfile'));

const secretKey = "58yuht4jrgkv9sdf8uht";
const API_BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8080';


let fs = require('fs-extra');

let upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
    //   let type = req.params.type;
      let path = `./public/images/`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      //originalname is the uploaded file's name with extn
      callback(null, file.originalname);
    }
  })
});

// GET all images by document
router.get('/document/:documentId', imageController.getByDocument);

// GET all images by user
router.get('/user/', imageController.getByUser);

// GET a specific image by id
router.get('/:id', imageController.getById);

// POST a new image
// router.route('/').post(imageController.create);

// POST a new image
// router.route('/upload').post(imageController.upload);

router.post('/', upload.any("images"), (req, res) => {
    const imageData = JSON.parse(req.body.imageData);
    const document_id = req.body.documentId;

    for (let i = 0; i < imageData.length; i++) {
        const id = imageData[i].image_id;
        const image_url = `${API_BASE_URL}/images/${id}.${imageData[i].image_extension}`;
        const image_order = imageData[i].image_order;
        const image_title = imageData[i].image_title;
        const image_description = imageData[i].image_description;
        const image_lat = imageData[i].image_lat;
        const image_long = imageData[i].image_long;
        const image_date = imageData[i].image_date;

        knex('images')
            .insert({ id, document_id, image_url, image_order, image_title, image_description, image_lat, image_long, image_date })
            .then((data) => {
                const newImageURL = `/image/${data[0]}`;
                res.status(201);
        })
        .catch((err) => res.status(400).send(`Error creating Image: ${err} ${imageData}`));
    }
})
// PUT/update an image by id
router.put('/:id', imageController.update);

// DELETE an image by id
router.delete('/:id', imageController.delete);

module.exports = router;