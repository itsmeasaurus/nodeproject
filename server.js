const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

const app = express()

const dbURI = 'mongodb+srv://root:root@nodetutorial.sa2wb85.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbURI)
        .then(() => { console.log('Connected to db') })
        .catch((err) => { console.log(err) })

const morgan = require('morgan')

// Set View Engine
app.set('view engine', 'ejs')

// Start listening port
app.listen(3000, ()=> {
    console.log('Server started on port 3000')
})

// app.use((req, res, next) => {
//     console.log("Middlware2 is working")
//     next()
// })

// Express static
app.use(express.static('public'))

// Set middleware 
app.use(morgan('dev'))

// Routes
app.get('/', (req,res)=> {
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

app.get('/about', (req,res)=> {
    // res.sendFile('./views/about.html', {root:__dirname});
    res.render('about', {
        title : "About Page"
    })
})

app.get('/contact', (req,res)=> {
    // res.sendFile('./views/about.html', {root:__dirname});
    res.render('contact', {
        title : "Contact Page"
    })
})

app.get('/aboutus',(req,res)=> {
    res.redirect('/about')
})

app.get('/blog/create', (req,res) => {
    res.render('blog/create', {
        title : "Blog Create Page"
    })
})


// Blog's backend api test
app.get('/api/blogs/create', (req,res) => {
    const blog = new Blog({
        title: 'My new blog',
        description: 'My new blog description is here',
        body: 'Praesent nobis vulputate duis dicta, hymenaeos suspendisse ridiculus quam habitant viverra mauris, suspendisse, porta laudantium ultricies repudiandae tristique, vulputate cursus.'
    })
    
    blog.save()
        .then((result) => { res.send(result) })
        .catch((err) => { console.log(err) })
})


app.get('/api/blogs', (req,res) => {
    Blog.find()
        .then((result) => { res.send(result)})
        .catch((err) => { console.log(err) })
})

app.get('/api/blogs/single', (req,res) => {
    Blog.findById('6624bdde12d0ba914d089c18')
        .then((result) => { res.send(result)})
        .catch((err) => { console.log(err) })
})

// 404 
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404', {
        title : "Not Found"
    })
})

