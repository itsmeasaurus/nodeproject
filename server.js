const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('dotenv').config()
const indexRoute =  require('./routes/indexRoute')
const aboutRoute =  require('./routes/aboutRoute')
const contactRoute =  require('./routes/contactRoute')
const blogRoute =  require('./routes/blogRoute')

const app = express()
const dbURI = process.env.DB_URI
const PORT = process.env.PORT
const appName = process.env.APP_NAME

mongoose.connect(dbURI)
        .then(() => { 
            app.listen(PORT,() => {
                console.log(`Server is running at port ${PORT}`);
            })
            console.log('Connected to db') 
        })
        .catch((err) => { console.log(err) })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use('/',indexRoute)
app.use('/about',aboutRoute)
app.use('/contact',contactRoute)

app.use('/blogs',blogRoute)


app.use((req,res)=>{
    // res.status(404).sendFile('./views/404.html',{root:__dirname});
    res.status(404).render('404', { title : "Not Found" })
})