const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routes/admin')
const shopRouter = require('./routes/shop')


const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.set('view engine', 'ejs')
app.set('views', 'views')
//serving files statically from public folder
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes)
app.use(shopRouter)

//error page displayed 
app.use((req,res,next)=>{
    res.status(404).render('error',{pageTitle:'Error.Page not found.'})
})
app.listen(5000)
console.log('server running on port 5000')