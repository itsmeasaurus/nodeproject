const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

router.get('/', (req,res)=> {
    // res.sendFile('./views/index.html',{root:__dirname});

    Blog.find()
        .then((result) => {
            res.render('index', {
                title: 'Home Page',
                blogs: result
            })
        })
        .catch((err) => { console.log(err) })
})

module.exports = router