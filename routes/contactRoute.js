const express = require('express')
const router = express.Router()

router.get('/', (req,res)=> {
    // res.sendFile('./views/about.html', {root:__dirname});
    res.render('contact', {
        title : "Contact Page"
    })
})

module.exports = router