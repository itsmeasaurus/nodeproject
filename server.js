const express = require('express')
const mongoose = require('mongoose')

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
    res.render('index',{
        title : "Home Page",
        blogs : [
            {title : "Blog title one", description : "Blog description one", body : "Blog body one"},
            {title : "Blog title two", description : "Blog description two", body : "Blog body two"},
            {title : "Blog title three", description : "Blog description three", body : "Blog body three"},
        ]
    })
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

// 404 
app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404', {
        title : "Not Found"
    })
})

