const Blog = require('../models/blog')

const index = (req, res) => {
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
}

const view = (req, res) => {
    Blog.findById(req.params.id)
        .then(result => {
            res.render('blogs/detail', { blog: result })
        })
        .catch((err) => { console.log(err) })
}

const create = (req,res) => {

    res.render('blogs/create', {
        title: 'Create New Blog'
    })
}

const store = (req,res) => {

    const blog = new Blog({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body
    })
    
    blog.save()
        .then((result) => { res.redirect('/blogs') })
        .catch((err) => { console.log(err) })
}

const remove = (req,res) => {

    Blog.findByIdAndDelete(req.params.id)
        .then(result => { res.json({ redirect: '/blogs' })})
        .catch((err) => { console.log(err) })
}

const update = (req,res) => {

    const updatedData = req.body

    Blog.findByIdAndUpdate(req.params.id, updatedData, { new: true} )
        .then(result => {
            Blog.findById(req.params.id).then(result => console.log(result))
            res.json({ redirect: '/blogs'})
        })
        .catch((err) => { console.log(err) })
}

module.exports = {
    index,
    view,
    create,
    store,
    remove,
    update
}