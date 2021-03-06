const express = require('express')
const path = require('path')

const dirRoot = require('../helpers/path')

const products = []

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product',(req,res,next)=>{
    res.status(302).render('add-product', {pageTitle:'Add Product'})
}) 

// /admin/add-product => POST
router.post('/add-product',(req,res,next)=>{
    products.push({title: req.body.title})
    res.redirect('/')
})

exports.routes = router;
exports.products = products



