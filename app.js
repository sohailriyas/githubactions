const express = require ('express')
const app = express()

app.get ('/api', (req,res) => res.send('Hello World'))
app.listen (3000, () => console.log('Second server ready'))
