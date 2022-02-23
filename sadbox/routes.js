const fs = require('fs')

const eventHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url ==='/'){    
    res.write('<html>')
    res.write('<title>SERVER SANDBOX</title>')
    res.write('<body><form action="/cash" method="POST"><input type="text" name= "method"><button type="submit" >SUBMIT</button></form></body>')
    res.write('</html>')
    return res.end()
    }
    if(url==='/cash' && method==='POST'){
        const body = []

        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            console.log(message)   
            fs.writeFileSync('kes.json', message)
        })
    }
    res.statusCode = 302
    res.setHeader("location","/")
    return res.end( )
}


    module.exports={
        handler:eventHandler,
        texter:'some new text for test'
    }