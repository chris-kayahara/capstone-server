const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController');

// GET all images by document
router.get('/document/:documentId', imageController.getByDocument);

// GET all images by user
router.get('/user/', imageController.getByUser);

// GET a specific image by id
router.get('/:id', imageController.getById);

// POST a new image
router.route('/').post(imageController.create);

// PUT/update an image by id
router.put('/:id', imageController.update);

// DELETE an image by id
router.delete('/:id', imageController.delete);

module.exports = router;