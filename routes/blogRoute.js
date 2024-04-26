const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

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

router.get('/create', (req,res) => {

    res.render('blogs/create', {
        title: 'Create New Blog'
    })
})

router.post('/create', (req,res) => {

    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body
    })
    
    blog.save()
        .then((result) => { res.redirect('/blogs') })
        .catch((err) => { console.log(err) })
})

router.get('/:id', (req,res) => {
    console.log(req.params.id)
    Blog.findById(req.params.id)
        .then(result => {
            console.log(result)
            res.render('blogs/detail', { blog: result })
        })
        .catch((err) => { console.log(err) })
})

router.delete('/:id', (req,res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(result => { res.json({ redirect: '/blogs' })})
        .catch((err) => { console.log(err) })
})

module.exports = router