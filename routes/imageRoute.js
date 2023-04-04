const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController');

// GET all images
router.get('/document/:documentId', imageController.getByDocument);

// GET a specific image by id
router.get('/:id', imageController.getById);

// POST a new image
router.route('/').post(imageController.create);

// PUT/update an image by id
router.put('/:id', imageController.update);

// DELETE an image by id
router.delete('/:id', imageController.delete);

module.exports = router;