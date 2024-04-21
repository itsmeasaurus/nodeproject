const express = require('express')
const router = express.Router()

router.get('/', (req,res)=> {
    // res.sendFile('./views/about.html', {root:__dirname});
    res.render('about', {
        title : "About Page"
    })
})

module.exports = router