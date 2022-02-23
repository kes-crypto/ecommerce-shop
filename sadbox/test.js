const http = require('http')

const server = http.createServer((req,res)=>{
    const url = req.url
    const method = req.method
    if(url==='/'){
    res.write('<html>')
    res.write('<title>TEST</title>')
    res.write('<body>Enter username:   <form action="/create-user" method="POST"><input type="text" name= "method"><button type="submit" >SUBMIT</button></form></body>')
    res.write('</html>')
    return res.end()
    }
    if(url==='/create-user' && method==='POST'){
        const body = []

        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString()
            const  username = parsedBody.split('=')[1]
            console.log('The username is:', username) 
            
        })
    }

    res.statusCode = 302
    res.setHeader('location', '/')

    return res.end()
}) 
server.listen(5000)