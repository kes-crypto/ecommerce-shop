const http = require('http')

const routes = require('./routes')

console.log(routes.texter)

const server = http.createServer(routes.handler)
server.listen(4000)
console.log('server runs on port 4000')