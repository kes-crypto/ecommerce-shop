const express = require('express')
const path = require('path')

const dirRoot = require('../helpers/path')
const adminData = require('./admin')

const products = adminData.products;

const router = express.Router()

router.get('/',(req,res,next)=>{
   
    const products = adminData.products
    res.status(302).render('shop', {
        prods:products,
        pageTitle:'Welcome to Shop',
        path:'/',
        hasProducts:products.length > 0,
        activeShop: true,
        productCSS: true
    })
})
module.exports = router;