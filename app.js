import dotenv from 'dotenv'
import fs from 'fs'
import http from 'http'



dotenv.config({path: "config.env"})

let port = process.env.PORT
let host = process.env.HOST

let server = http.Server((req,resp) => {
    if(req.url === "/index") {
        fs.readFile("views/index.html","utf-8", (err,data) => {
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url === "/about") {
        fs.readFile("views/about.html","utf-8", (err,data) => {
            if(err) throw err
            resp.end(data)
        })
    }
    if(req.url === "/contact") {
        fs.readFile("views/contact.html","utf-8", (err,data) => {
            if(err) throw err
            resp.end(data)
        })
    }

    else {
        fs.readFile("views/email.html","utf-8", (err,data) => {
            if(err) throw err
            resp.end(data)
        })
    }
})

server.listen(port,host,(err) => {
    if(err) throw err
    console.log(`The server is running on port: ${port} with hostname: ${host}`)
})