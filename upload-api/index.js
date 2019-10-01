var express = require('express')
var app = express()
const port =  2020
var cors = require('cors')
var bodyParser = require('body-parser')
var multer = require('multer')

app.use(bodyParser.json())
app.use(cors())
app.use('/files', express.static('uploads'))

let multerStorageConfig =  multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },

    filename: (req, file, cb) => {
        cb(null, `product-${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

let fileFilterConfig = (req, file, cb) => {
    if (file.mimetype.split('/')[1] == 'jpeg' || file.mimetype.split('/')[1] == 'png'){
        cb(null, true)
    } else {
        req.validation = {
            error: true,
            msg: 'File must be an image'
        }
        cb(null, false)
    }
}

let upload = multer({
    storage: multerStorageConfig,
    fileFilter: fileFilterConfig
})

app.post('/uploadimage', upload.single('browsefile'), (req, res) => {
    res.send('Success')
})

app.listen(port, console.log('Server up in port ' + port))