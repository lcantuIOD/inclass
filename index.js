const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.use('/', (req, res)=>{
    res.send({ status: 200, message: "Hellow world!"})
})

app.listen(port, ()=> {
    console.log(`example app listening at http://localhost:${port}`)
})