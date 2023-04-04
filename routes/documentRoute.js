const express = require('express');
const router = express.Router();
const documentController = require('../controller/documentController');

// GET all documents by user
router.get('/user/:userId', documentController.getByUser);

// GET a specific document by id
router.get('/:id', documentController.getById);

// POST a new document
router.route('/').post(documentController.create);

// PUT/update a document by id
router.put('/:id', documentController.update);

// DELETE a document by id
router.delete('/:id', documentController.delete);

module.exports = router;