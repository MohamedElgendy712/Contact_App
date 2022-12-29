const express = require('express')
const fileUpload = require('express-fileupload')
const multer = require('multer')
const path = require('path')
const Contact = require('../models/contact')

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended : false}))
router.use(fileUpload())

router.route('/')
.get((req , res , next) =>{
    Contact.find({})
    .then(contacts =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.json(contacts)
    }, err => next(err))
    .catch(err => next(err))
})
.post( (req , res , next)=>{

    let image = req.files.image

    image.mv(path.resolve(__dirname + 'public/images' + image.name) , (err)=>{
        Contact.create({...req.body , photoUrl : '/images/' + image.name})
        .then(contact =>{
            res.statusCode = 200
            res.setHeader('content-type' , 'application/json')
            res.json(contact)
        }, err => next(err))
        .catch(err => next(err))
    })
})

router.route('/contactId')
.get((req , res , next) =>{
    Contact.findById(req.params.contactId)
    .then(contact =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.json(contact)
    }, err => next(err))
    .catch(err => next(err))
})
.put((req , res , next) =>{
    Contact.findByIdAndUpdate(req.params.contactId , {$set : req.body} , {new : true})
    .then(contact =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.json(contact)
    }, err => next(err))
    .catch(err => next(err))
})
.delete((req , res , next) =>{
    Contact.findByIdAndRemove(req.params.contactId)
    .then(response =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.json(response)
    }, err => next(err))
    .catch(err => next(err))
})

module.exports = router