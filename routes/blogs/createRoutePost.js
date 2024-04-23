const express = require('express')
const router = express.Router()
const Blog = require('../../models/blog')

// Blog's backend api test
router.post('/', (req,res) => {

    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body
    })
    
    blog.save()
        .then((result) => { res.redirect('/blogs') })
        .catch((err) => { console.log(err) })
})

module.exports = router