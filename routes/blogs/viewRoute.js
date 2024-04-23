const express = require('express')
const router = express.Router()
const Blog = require('../../models/blog')

// Blog's backend api test
router.get('/', (req,res) => {
    
    Blog.find()
        .sort({createdAt: 'desc'})
        .then((result) => {
            res.render('blogs/view', {
                title: 'Blog list',
                blogs: result
            })
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = router