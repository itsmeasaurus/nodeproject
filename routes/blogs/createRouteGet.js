const express = require('express')
const router = express.Router()
const Blog = require('../../models/blog')

// Blog's backend api test
router.get('/', (req,res) => {

    res.render('blogs/create', {
        title: 'Create New Blog'
    })
    // const blog = new Blog({
    //     title: 'My new blog',
    //     description: 'My new blog description is here',
    //     body: 'Praesent nobis vulputate duis dicta, hymenaeos suspendisse ridiculus quam habitant viverra mauris, suspendisse, porta laudantium ultricies repudiandae tristique, vulputate cursus.'
    // })
    
    // blog.save()
    //     .then((result) => { res.send(result) })
    //     .catch((err) => { console.log(err) })
})

module.exports = router