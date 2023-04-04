const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// GET all users
router.get('/', userController.getAll);

// GET a specific user by id
router.get('/:id', userController.getById);

// POST a new user
router.route('/').post(userController.create);

// PUT/update a user by id
router.put('/:id', userController.update);

// DELETE a user by id
router.delete('/:id', userController.delete);

module.exports = router;