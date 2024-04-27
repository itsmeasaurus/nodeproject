const express = require('express')
const router = express.Router()
const BlogController = require('../controllers/blogcontroller')

router.get('/', BlogController.index)
router.get('/create', BlogController.create)
router.post('/create', BlogController.store)
router.get('/:id', BlogController.view)
router.delete('/:id', BlogController.remove)
router.put('/:id', BlogController.update)

module.exports = router