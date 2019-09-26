const fs = require('fs')
const handlebars =  require('handlebars')
const pdf = require('html-pdf')

module.exports = {
    pdfcreate: (html, replacements, options, cb) => {
        fs.readFile(html, {encoding: 'utf-8'}, (err, readHTML) => {
            if(err){
                console.log(err)
                return false
            } else {
                var template = handlebars.compile(readHTML)
                var htmlToPdf = template(replacements)

                pdf.create(htmlToPdf, options).toStream((err, stream) => {
                    if(err){
                        console.log(err)
                        return cb(stream)
                    } else {
                        return cb(stream)
                    }
                })
            }
        })
    }
}