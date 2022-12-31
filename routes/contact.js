const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const Contact = require('../models/contact')
const uploadToCloud = require('../helper/uploadPhotoToCloud')

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
.post( async (req , res , next)=>{

    let image = req.files.image
    image.mv(path.resolve(__dirname , '..' , 'public/img' , image.name) , async(err)=>{

        let url = await uploadToCloud(path.resolve(__dirname ,'..','public/img' , image.name) , image.name)
        Contact.create({...req.body , photoUrl : url})
        .then(() =>{
            res.statusCode = 200
            res.setHeader('content-type' , 'application/json')
            res.redirect('http://localhost:3000')
        }, err => next(err))
        .catch(err => next(err))
    })
})

router.route('/:contactId')
.get((req , res , next) =>{
    Contact.findById(req.params.contactId)
    .then(contact =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.json(contact)
    }, err => next(err))
    .catch(err => next(err))
})
.post(async (req , res , next) =>{

    let url = ""
    if(req.files != null && req.files.image ){
        let image = req.files.image
        image.mv(path.resolve(__dirname , '..' , 'public/img' , image.name) , async(err)=>{
            url = await uploadToCloud(path.resolve(__dirname ,'..','public/img' , image.name) , image.name)
        })
    }

    if(url === "")
        await  Contact.findByIdAndUpdate(req.params.contactId , {$set : req.body} , {new : true})
    else
        await  Contact.findByIdAndUpdate(req.params.contactId , {$set : {...req.body , photoUrl : url}} , {new : true})

    res.statusCode = 200
    res.setHeader('content-type' , 'application/json')
    res.redirect('http://localhost:3000')
})
.delete((req , res , next) =>{
    Contact.findByIdAndRemove(req.params.contactId)
    .then(response =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.redirect('http://localhost:3000')
    }, err => next(err))
    .catch(err => next(err))
})

module.exports = router