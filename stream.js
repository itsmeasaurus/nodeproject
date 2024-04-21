const fs = require('fs')

const readStream = fs.createReadStream(__dirname + '/blog.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream(__dirname + '/blog1.txt',{encoding:'utf8'})

readStream.on('data', (chunk) => {
    console.log('=====CHUNK=======')
    console.log(chunk)

    writeStream.write('====CHUNK WRITE=====')
    writeStream.write(chunk)
})

readStream.pipeTo(writeStream)